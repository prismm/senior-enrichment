'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const pkg = require('../package.json');

const app = express();

// app.use(require('volleyball'));

const db = require('../db');


module.exports = app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
    .use('/api', require('./api')) // Serve our api
    .use('/api/*', (req, res) => { res.send('No api route there... try again') })
    .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))) // Send index.html for any other requests.

db.didSync
    .then(app.listen(
        process.env.PORT || 1337,
        () => {
            console.log(`Started HTTP Server`)
            console.log(`Listening on 1337`)
        }
    ))