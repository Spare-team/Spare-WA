
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var template = require('express3-handlebars');
var request = require('request');
var app = express();

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', template({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/', function(req, res){
	res.render('home');
});

app.get('/products', function(req, res){
	console.log(req.get('content-type'));
	if(req.get('content-type') != "application/json")
	{
		request('http://localhost:3000/api/productos/', function(error, response, body){
			if(!error && response.statusCode == 200)
			{	
				console.log(body);
				res.render('products', {
					productos : body 
				});
			}	
		});	
	}
	else {
		request('http://localhost:3000/api/productos/', function(error, response, body){
			if(!error && response.statusCode == 200)
			{	
				res.send(body);
			}	
		});	
	}
});

app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
