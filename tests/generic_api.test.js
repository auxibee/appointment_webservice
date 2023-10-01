/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

describe('GET /health', () => {
  it('responds with 200 ok status and health status of the application', (done) => {
    request(app)
      .get('/health')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { health: 'ok' }, done);
  });
});
