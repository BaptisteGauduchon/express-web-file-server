var request = require('supertest');
var app = require('../app');

// Rooting test
describe('Routing', function() {
	describe('GET /', function() {
		it('should respond with HTTP status code 200', function(res) {
			request(app)
				.get('/')
				.expect(200, res);
		});
	});
	describe('GET /file', function() {
		it('should respond with HTTP status code 200', function(res) {
			request(app)
				.get('/file')
				.expect(200, res);
		})
	})
});