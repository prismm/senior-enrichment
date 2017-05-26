'use strict'
const api = require('express').Router();
const db = require('../../db');

api.use('/campus', require('./campusRoutes'))
api.use('/student', require('./studentRoutes'))

module.exports = api