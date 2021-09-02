const request = require('supertest');
const app = require('../app');

describe('Test / route', () => {
  test('should return 201', async () => {
    await request(app).get('/').expect(200);
  });
});
