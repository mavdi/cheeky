var sinon = require('sinon');

describe('Devices', function() {
  var devices = require('../../lib/devices');

  before(function() {
    var mock = sinon.mock(require('usb'));
    mock.expects('getDeviceList').returns([{
      deviceDescriptor : {
        'idVendor' : 8483,
        'idProduct' : 4112
      }
    }]);
  });

  after(function() {
    require('usb').getDeviceList.restore();
  });

  it('shoud interface to get dream cheeky device', function() {
    devices.getDreamCheeky.should.exist;
  });

  it('should be able to find and return the dream cheeky device', function() {
    devices.getDreamCheeky().deviceDescriptor.idVendor.should.equal(8483);
  });
});

