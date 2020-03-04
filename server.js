const express = require('express');
const morgan = require('morgan');
const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(morgan());
server.use(express.json());

server.use('/api/schemes', SchemeRouter);

server.use('/', (req, res, next) => {
	res.status(200).json({ message: 'Welcome to the Router' });
});
module.exports = server;
