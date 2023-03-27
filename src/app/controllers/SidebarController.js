const User = require('../models/User');
const Keyword = require('../models/Keyword');

class AsideController {
    //[GET] /api/sidebar/discover
    discover(req, res, next) {
        Keyword.find({})
            .lean()
            .sort({ "search_count": 'descending'})
            .limit(10)
            .then((keyword) => {
                if (keyword.length) {
                    const sendData = keyword.map(({
                        keyword_name,
                        keyword_type,
                    }) => 
                    ({ keyword_name, keyword_type }));
                    const responseData = { data: sendData };
                    res.status(200).json(responseData)
                }
                else {
                    const responseData = { message: 'dont\'t have any data' };
                    res.status(404).json(responseData)
                }
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    }

    //[GET] /api/sidebar/suggestedAccounts
    suggestedAccounts(req, res) {
       User.find({})
       .lean()
       .limit(10)
       .then((users) => {
            if (users.length) {
                const sendData = users.map(({ 
                    user_name: user_name,
                    full_name: full_name,
                    avatar_url: avatar_url,
                    is_tick: is_tick
                }) => ({
                    user_name,
                    full_name,
                    avatar_url,
                    is_tick,
                }))
                const responseData = { data: sendData };
                res.status(200).json(responseData);
            }
            else {
                const responseData = { message: 'dont have any users'};
                res.status(404).json(responseData);
            }
       })
       .catch(error => {
            res.status(500).send(error);
       })
    }
}

module.exports = new AsideController;
