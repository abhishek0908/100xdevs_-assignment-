const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

function countRequest(req, res, next) {
  requestCount++;
  // console.log(`Total requests: ${requestCount}`);
  next();
}

app.get('/user',countRequest, function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user',countRequest, function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount',countRequest, function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;