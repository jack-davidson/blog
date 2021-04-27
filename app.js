#!/usr/bin/env node
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('static'));
    
app.set('view engine', 'ejs');

const port = 8000;
const hostname = 'localhost';

app.get('/', (req, res) => {
    fs.readFile('blogs.json', 'utf8', (err, data) => {
        res.render('index.ejs', {blogs: JSON.parse(data)});
    });
});

app.get('/blog/:id', (req, res) => {
    fs.readFile('blogs.json', 'utf8', (err, data) => {
    });
});

app.listen(port, hostname, () => {
    console.log(`blog listening at http://${hostname}:${port}`);
});
