var express = require('express');
var bodyParser = require('body-parser');
var handlebars  = require('express-handlebars');
var routes = require('./routes');


var engine = handlebars({
	layoutsDir: `${__dirname}/templates/layouts`,
	defaultLayout: 'main',
	extname: 'hbs'
});


// create app instance
// set view engine
// define middleware usage
var app = express()
	.engine('hbs', engine)
	.set('views', `${__dirname}/templates`)
	.set('view engine', 'hbs')
	.use(express.static('public'))
	.use(bodyParser())
	.use(function(req, res, next) {
		// this will get called on every request
		console.log(`[${req.method}] - ${req.url}`);
		next();
	});


// loop over defined routes in `routes.js` and call the method on the app
// same as this example `app.get('/pathname', handler)`
// i just like having my routes defined elsewhere
routes.forEach(function(route) {
	[].concat(route.methods).forEach(method => app[method.toLowerCase()](route.path, route.handler))	
});

// handle 404
app.use(function(req, res, next) {	
	res.sendStatus(404);
});


const PORT = 3000;

// start server
app.listen(PORT, function(error) {
	if (!error) {
		console.log(`Server started on port ${PORT}`);
	}
});
