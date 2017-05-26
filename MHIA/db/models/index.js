'use strict';

const Student = require('./student')
const Campus = require('./campus')

module.exports = {
    Student,
    Campus
}

Student.belongsTo(Campus);