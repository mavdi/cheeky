var init = function(app) {
  this.app = app;

  app.get('/device', function(req, res) {
    res.send('getting device')
  });
};

module.exports = {
  init : init
}