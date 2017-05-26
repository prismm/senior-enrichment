'use strict'
const router = require('express').Router();
const models = require('../../db/models');
const Campus = models.Campus;
const Student = models.Student;
module.exports = router;

router.get('/', (req, res, next) => {
    Campus.findAll()
        .then(campuses => res.json(campuses))
        .catch(next)
})

router.param('campusId', (req, res, next, campusId) => {
    Promise.all([
            Campus.findById(campusId),
            Student.findAll({
                where: {
                    campusId: campusId
                },
            })
        ])
        .then(([foundCampus, foundStudents]) => {
            if (foundCampus) {
                req.campus = foundCampus;
                req.campus.students = foundStudents
                next();
                return null;
            } else {
                throw new Error('campus not found')
            }
        })
        .catch(next)
})

router.get('/:campusId', (req, res) => {
    res.json([req.campus, req.campus.students]);
    // console.log(req)
})

router.put('/:campusId', (req, res, next, id) => {
    req.campus.update(req.body)
        .then(updatedCampus => res.status(200).json(updatedCampus))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Campus.create(req.body)
        .then(newCampus => res.status(201).json(newCampus))
        .catch(next);
})

router.delete('/:campusId', (req, res, next) => {
    req.campus.destroy()
        .then(() => res.status(204).end())
        .catch(next);
})