const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Follower = new Schema({
    following_user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    followed_user_id: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Follower', Follower)
