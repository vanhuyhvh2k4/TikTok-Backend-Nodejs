const User = require('../models/User.js');
const Keyword = require('../models/Keyword.js');

class SearchController {

    // [GET] /api/search/find?q='keyword'
    search(req, res) {
        const search_keyword = req.query.q;
        const regex = new RegExp(`.*${search_keyword}`, 'i');

        if (search_keyword) {
            const UserQuery = User.find({ $or:[{ "user_name": regex }, { "full_name": regex}]}).lean().limit(5);
            const KeywordQuery = Keyword.find({ "keyword_name": regex }).lean().sort({ "search_count": "descending" }).limit(5);

            Promise.all([ UserQuery, KeywordQuery])
                .then(([user,keyword]) => {
                    if (user.length || keyword.length) {
                        
                        const userResults = user.map(({
                            avatar_url, 
                            user_name, 
                            full_name, 
                            is_tick, 
                        }) => ({
                            avatar_url, 
                            user_name, 
                            full_name, 
                            is_tick, 
                        }));
                        const keywordResults = keyword.map(({
                            keyword_name, 
                            keyword_type, 
                        }) => ({
                            keyword_name, 
                            keyword_type, 
                        }));
                        const responseData = { data: {user: userResults, keyword: keywordResults}}
                        res.status(200).json(responseData);
                    }
                    else {
                        const responseData = { message: `No results found for the keyword: "${search_keyword}"`};
                        res.status(404).json(responseData);
                    }
                })
                .catch(err => res.status(500).send(err))
        }
    }
}

module.exports = new SearchController;

