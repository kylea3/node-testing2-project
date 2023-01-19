const express = require('express');

const server = express();

const playersRouter = require('./players/players-router');

server.use(express.json());

server.use('/api/players', playersRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some endpoints!</h2>`);
});

module.exports = server;
