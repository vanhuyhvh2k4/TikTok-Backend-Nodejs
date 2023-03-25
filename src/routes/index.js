const searchRouter = require('./search.router.js');
const homeRouter = require('./home.router.js');
const uploadRouter = require('./upload.router.js');
const sidebarRouter = require('./sidebar.router.js');
const authRouter = require('./auth.router.js'); 

function route (app) {
      
      app.use('/', authRouter);

      app.use('/', homeRouter);
      
      app.use('/', searchRouter);

      app.use('/', sidebarRouter);

      app.use('/', uploadRouter);
}

module.exports = route;
