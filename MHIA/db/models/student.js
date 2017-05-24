'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        isEmail: true
    }
})