const express = require('express');
const helmet = require('helmet');

const db = require('./db-config');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/resources', (req, res) => {

  db('resources')
  .then(recipes => {
    res.status(200).json(recipes);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});



module.exports = server;

