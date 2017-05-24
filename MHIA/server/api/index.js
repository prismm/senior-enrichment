'use strict'
const api = require('express').Router();
const db = require('../../db');

// api.get('/hello', (req, res) => res.send({ hello: 'world' }))
api.use('/campus', require('./campusRoutes'))
api.use('/student', require('./studentRoutes'))

module.exports = api