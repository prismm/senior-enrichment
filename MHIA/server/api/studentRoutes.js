'use strict'
const router = require('express').Router();
const models = require('../../db/models');
const Student = models.Student;
module.exports = router;

router.get('/', (req, res, next) => {
    Student.findAll()
        .then(students => res.json(students))
        .catch(next)
})

router.get('studentId', (req, res, next, id) => {
    Student.findById(id)
        .then(student => {
            if (student) res.json(student);
            else throw new Error('student not found')
        })
        .catch(next)
})

router.get('/:studentId', (req, res) => {
    res.json(req.student)
})

router.put('/:studentId', (req, res, next, id) => {
    req.student.update(req.body)
        .then(updatedStudent => res.status(200).json(updatedStudent))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Student.create(req.body)
        .then(newStudent => res.status(201).json(newStudent))
        .catch(next);
})

router.delete(':/studentId', (req, res, next) => {
    req.student.destroy()
        .then(() => res.status(204).end())
        .catch(next);
})