var devices = require('./lib/devices');
var express = require('express');
var colors = require('colors');
var router = require('./lib/router');

var app = express();

router.init(app);

app.listen(3000, function() {
  console.log('Server running'.green);
});

