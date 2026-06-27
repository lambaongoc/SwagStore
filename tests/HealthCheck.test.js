    'use strict';

    const request = require('supertest');
    const createApp = require('../app');

    describe('Health Check API', () => {
    let app;

    beforeAll(() => {
        app = createApp();
    });

    test('GET /health should return server status', async () => {
        const res = await request(app).get('/health');

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
        status: 'OK',
        message: 'SwagStore is running',
        version: '1.1.0'
        });
    });
    });