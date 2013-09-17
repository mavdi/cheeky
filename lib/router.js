var devices = require('./devices');
var config = require('config');

var init = function(app) {
  this.app = app;

  app.get('/device', function(req, res) {
    res.send(JSON.stringify(devices.getDreamCheeky()) || "no device found");
  });

  app.post('/device', function(req, res) {
    var dream = devices.getDreamCheeky();

    if(!dream) {
      return res.send("device could not be found");
    }

    dream.open();
    dream.controlTransfer(
      0x21,0x09, 0x0, 0x0, new Buffer([0x02, config.commands[req.body.command], 0x00,0x00,0x00,0x00,0x00,0x00]),
      function(data)
      {
        res.send("Command executed");
      }
    );
  });
};

module.exports = {
  init : init
};