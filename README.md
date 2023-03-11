b1: install express
-npm init
-create file index.js -->install express --> open website npm start to set port
b2: nodemon auto restarting web sever
-install nodemon
-"start": "nodemon --inspect index.js"
b3: git 
-git init
-gitignore
b4: morgan: watch log request
-install npm morgan
b5: handlebars: template engine
-install npm handlebars ver5.1.0
-format sourse code
	+create folder "src" , move file index.js, fix file package.json "main": "src/index.js" and "start": "src/index.js"
	+at src create folder "resourses--views--home.handlebars" and "resourses--views--partials--header.handlebars" and "resourses--partials--footer.handlebars"
	+at src create folder "resourses--scss--app.scss" and "resourses--views-home.handlebars" and resourses--views--layouts--main.handlebars and import content {{> header}} {{{body}}} {{>footer }}
	
-at file index.js import handlebar
	const path = require('path');
	const exphbs = require('express-handlebars');
	app.engine('handlebars', exphbs());
	app.set('view engine', 'handlebars');
	app.set('views', path.join(__dirname, 'resourses/views'));
-render file home.js
b6: static, sass
-at file index.js: app.use(express.static(path.join(__dirname, 'public')));
-install npm node-sass
-at src create folder "public--css--app.css"
-at file package.json:"watch": "node-sass --watch src/resources/scss/app.scss src/public/css/app.css"
-link file css for html :/css/app.css
-at blog create file nodemon.json: {"ext": "js json scss"}
b7: link bootstrap
b8: routing: have source code
b9: mvc model: have source code