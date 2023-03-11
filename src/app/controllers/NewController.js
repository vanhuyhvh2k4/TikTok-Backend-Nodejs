const User = require('../models/User.js');

class NewController {

    // [GET] /news
    index(req, res, next) {
        const keyword = req.query.q;
        const regex = new RegExp(`.*${keyword}`, 'i');

        if (keyword) {
            User.find({ $or:[{ "fullName": regex }, { "nickName": regex }]})
            .lean()
            .limit(5)
            .then((users) => {
                    if (users) {
                        const responseData = { data: users };
                        res.json(responseData);
                    }
                })
                .catch(next);
        }

    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('news details');
    }
}

module.exports = new NewController;

