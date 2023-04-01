const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  user_name: {type: String, require: true, maxlength: 100},
  password: {type: String, require: true, maxlength: 100},
  email: {type: String, require: true, maxlength: 200},
  avatar_url: {type: String, maxlength: 5000, default: 'https://sf16-sg.tiktokcdn.com/obj/eden-sg/uvkuhyieh7lpqpbj/pwa/512x512.png'},
  is_tick: {type: Boolean, require: true, default: false},
  bio: {type: String, maxlength: 500},
  first_name: {type: String, maxlength: 100},
  last_name: {type: String, maxlength: 100},
  full_name: {type: String, maxlength: 200, require: true},
  gender: {type: Boolean},
  date_of_birth: {type: Date},
  country: {type: String, maxlength: 200}
});

module.exports = mongoose.model('User', User)
