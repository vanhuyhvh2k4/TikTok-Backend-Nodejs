const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Comment = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    video_id: {type: Schema.Types.ObjectId, ref: 'Video'},
    comment_text: {type: String, maxlength: 500},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Comment', Comment)
