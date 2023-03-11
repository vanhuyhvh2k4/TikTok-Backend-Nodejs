const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
    firstName: String,
    lastName: String,
    fullName: String,
    nickName: String,
    avatar: String,

  });

module.exports = mongoose.model('User', User)
