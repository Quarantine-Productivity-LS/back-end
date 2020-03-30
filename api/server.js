//imports
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

//route imports
const usersRouter = require('../api-users/users.router.js');
const authRouter = require('../api-auth/auth-router.js');

//declare server
const server = express()

//global mw
server.use(express.json())
server.use(cors())
server.use(helmet())

//routes
server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

//base api
server.get('/api', (req, res) => {
  res.status(200).json({ api: 'is running' })
})

module.exports = server;
