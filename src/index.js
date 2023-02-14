const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

// template engine handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', function (req, res) {
  res.render('home')
})

app.listen(3000)