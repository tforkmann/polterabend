
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var lessMiddleware = require('less-middleware');
var app = module.exports = express();
//var seojs = require('express-seojs');

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.bodyParser());
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(app.router);
app.use(lessMiddleware(path.join(__dirname, 'source', 'less'), {
  dest: path.join(__dirname, 'public', 'stylesheets'),
  preprocess: {
    path: function(pathname, req) {
      return pathname.replace('/stylesheets', '');
    }
  }
}));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(seojs('your_secret_api_token'));



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.use(express.logger('dev'));
  //app.set('view cache', true);
}

require('./routes');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
