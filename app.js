#!/usr/bin/env node
const express = require('express');
const fs = require('fs');

const port = 8000;

app = express();

app.get('/blog/:id', (req, res) => {
    fs.readFile('blogs.json', 'utf8', (err, data) => {
        fs.readFile('blogs.json', 'utf8', (err, data) => {
            res.send(data);
        });
    });
});

app.listen(port, () => {
    console.log(`Blog listening on http://localhost:${port}`);
});
