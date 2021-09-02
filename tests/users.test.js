const request = require('supertest');
const app = require('../app');

describe('Test /users route', () => {
  test('should return 201', async () => {
    await request(app).get('/users').expect(201);
  });
});
