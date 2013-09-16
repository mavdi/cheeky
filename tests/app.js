var app = require('../app').app;

var request = require('supertest');

describe('GET /device', function() {
  it('responds with 200', function(done) {
    request(app).get('/device').expect(200, done);
  });
});