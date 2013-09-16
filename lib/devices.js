var usb = require('usb');
var _ = require('underscore');
var config = require('config');

var getDreamCheeky = function() {
  var devices = usb.getDeviceList();
  console.log(devices);
  var dreamCheeky;
  _(devices).each(function(device) {
    if(device.deviceDescriptor.idVendor === config.device.idVendor 
      && device.deviceDescriptor.idProduct === config.device.idProduct) {
      dreamCheeky = device;
    }
  });

  return dreamCheeky;
};

module.exports = {
  getDreamCheeky : getDreamCheeky
}