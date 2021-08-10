const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the dogs endpoint', async () => {
    const response = await request.get('/puppies');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

it('gets the dog show endpoint', async () => {
    const response = await request.get('/puppies/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[0]);
})