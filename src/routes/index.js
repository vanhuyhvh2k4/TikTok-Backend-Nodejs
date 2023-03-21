const newsRouter = require('./users.js')

function route (app) {
      
      app.use('/api', newsRouter);
}

module.exports = route;
