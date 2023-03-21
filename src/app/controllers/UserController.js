const User = require('../models/User.js');

class NewController {

    // [GET] /api/users
    index(req, res, next) {
        const type = req.query.type;
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
        else if (type == 'less') {
            User.aggregate([
                { $sample: { size: 10 } },
              ])
              .then((users) => {
                const responseData = { data: users };
                res.json(responseData)
              })
        }
        

    }
}

module.exports = new NewController;

