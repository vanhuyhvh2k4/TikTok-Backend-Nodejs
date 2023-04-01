const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Follower = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    following_user_id: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Follower', Follower)
