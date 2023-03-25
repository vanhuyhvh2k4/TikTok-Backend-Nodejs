const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Like = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: 'User'},
  video_id: {type: Schema.Types.ObjectId, ref: 'Video'},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Like', Like)
