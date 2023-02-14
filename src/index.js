const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

const route = require('./routes/index.js')
const db = require('./config/connectDB/index.js');

// connect DB
db.connect();

// route initial
route(app);

app.use(express.static(path.join(__dirname, 'public')));

// template engine handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));


app.listen(3000)