const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Upload = new Schema({
    name: String,
    url: String,
    cloudinary_id: String,
    description: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Upload', Upload)
