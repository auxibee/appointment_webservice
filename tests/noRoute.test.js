/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

describe('GET / undefined route', () => {
  it('responds with 404 not not found and {error: No matching route}', (done) => {
    request(app)
      .get('/hmmmmmmmmm-erhfdfd')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, { error: 'No matching route' }, done);
  });
});
