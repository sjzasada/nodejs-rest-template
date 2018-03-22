var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Profile = require('./api/models/profileModel');
var bodyParser = require('body-parser');

var config = require('./config');
var apikey = require('./middlewares/apikey');
var auth = require('./middlewares/auth');

const fs = require('fs');

app.set('config', config);

var cert = fs.readFileSync(config.profile.publickey);

app.set('jwtcert', cert); //signing cert

mongoose.Promise = global.Promise;
mongoose.connect(config.profile.mongourl);

app.use(apikey);
app.use(auth);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/profileRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
