const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const cors = require('cors');
const dotenv = require('dotenv');
var cookieParser = require('cookie-parser')
const route = require('./routes/index.js')
const db = require('./config/connectDB/index.js');

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your own domain
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}

dotenv.config();

app.use(cookieParser())

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(cors(corsOptions));

// connect DB
db.connect();

// route initial
route(app);

app.use(express.static(path.join(__dirname, 'public')));

// template engine handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));


app.listen(3001)