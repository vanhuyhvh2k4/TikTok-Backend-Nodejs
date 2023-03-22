const searchRouter = require('./search.router.js');
const homeRouter = require('./home.router.js');
const uploadRouter = require('./upload.router.js');
const sidebar = require('./sidebar.router.js');

function route (app) {
      
      app.use('/', homeRouter);
      
      app.use('/', searchRouter);

      app.use('/', sidebar);

      app.use('/', uploadRouter);
}

module.exports = route;
