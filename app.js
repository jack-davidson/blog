#!/usr/bin/env node
const express = require('express');
const fs = require('fs');
const pug = require('pug');

const server = express();

const port = 8000;
const hostname = 'localhost';

server.get('/blog/:id', (req, res) => {
    fs.readFile('blogs.json', 'utf8', (err, data) => {
        res.type('json');
        res.send(JSON.parse(data)[req.params['id']]);
    });
});

server.listen(port, hostname, () => {
    console.log(`blog listening at http://${hostname}:${port}`);
});
