const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Keyword = new Schema({
    keyword_name: {type: String, require: true, maxlength: 100},
    keyword_type: {type: Boolean, require: true},
    search_count: {type: Number},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Keyword', Keyword)
