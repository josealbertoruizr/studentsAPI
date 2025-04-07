const request = require('supertest');
const app = require('../api');

describe('GET /students', () => {
    it('should return a list of students', async () => {
        const response = await request(app).get('/students');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

