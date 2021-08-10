console.log('hello!');

const express = require('express')
const app = express()
const data = require('./data.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/puppies', (req, res) => {
    res.json(data);
})

app.get('/puppies/:id', (req, res) => {
    const dogID = Number(req.params.id);
    const dog = data.find(item => item.id === dogID);
    res.json(dog);
})

module.exports = app;