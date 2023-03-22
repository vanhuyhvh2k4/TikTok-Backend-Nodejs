const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Video = new Schema({
  user_id: {type:  Schema.Types.ObjectId, ref: 'User'},
  cloudinary_id: {type: String},
  video_name: {type: String},
  video_url: {type: String, maxlength: 500},
  video_description: {type: String, maxlength: 500},
  // is_public: {type: Boolean},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Video', Video)
