'use strict'
const router = require('express').Router();
const models = require('../../db/models');
const Campus = models.Campus;
module.exports = router;

router.get('/', (req, res, next) => {
    Campus.findAll()
        .then(campuses => res.json(campuses))
        .catch(next)
})

router.get('campusId', (req, res, next, id) => {
    Campus.findById(id)
        .then(campus => {
            if (campus) res.json(campus);
            else throw new Error('campus not found')
        })
        .catch(next)
})

router.get('/:campusId', (req, res) => {
    res.json(req.campus)
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