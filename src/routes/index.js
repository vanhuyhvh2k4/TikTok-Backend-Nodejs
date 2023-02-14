const newsRouter = require('./news.js')

function route (app) {

    app.get('/', function (req, res) {
        res.render('home')
      })
      
      app.use('/news', newsRouter);
}

module.exports = route;
