var form_post_handler = require('./handlers/form_post_handler');

var routes = [
	{
		methods: ['GET'],
		path: '/',
		handler: function(req, res) {			
			res.render('homepage', {something: 'hello world!', pagename: 'index'});
		}
	},
	{
		methods: ['GET'],
		path: '/form',
		handler: function(req, res) {			
			res.render('form_page', {something: 'heyo', pagename: 'form page'});
		}
	},
	{
		methods: ['GET', 'POST'],
		path: '/receiver',
		handler: form_post_handler
	},

];

module.exports = routes;
