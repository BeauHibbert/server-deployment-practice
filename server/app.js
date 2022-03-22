'use strict';


const express = require('express');

const app = express();

app.get('/hello', (request, response, next) => {
  response.send('Hello World');
});

app.get('/*', (request, response, next) => {
  response.send('Wildcard');
});

module.exports = app;