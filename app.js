var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var knex = require('./db/knex');
// var rp = require('request-promise');
var cors = require('cors');
require('dotenv').load();
var braintree = require("braintree");


var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.merchantId,
  publicKey: process.env.publicKey,
  privateKey: process.env.privateKey
});
app.get("/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

app.post("/checkout", function (req, res) {
  var nonceFromTheClient = req.body.payment_method_nonce;
  // Use payment method nonce here
});

gateway.transaction.sale({
  amount: "10.00",
  paymentMethodNonce: "fake-valid-nonce",
  options: {
    submitForSettlement: true
  }
}, function (err, result) {
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    // res.status(status).json(obj)
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  // res.status(status).json(obj)
});


module.exports = app;

// app.use('/', routes);
// app.use('/users', users);

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
