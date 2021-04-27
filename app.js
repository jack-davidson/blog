#!/usr/bin/env node
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('static'));
app.set('static', __dirname + '/static');
    
app.set('view engine', 'ejs');

const port = 8000;
const hostname = 'localhost';

app.get('/', (_, res) => {
    fs.readFile('blogs.json', 'utf8', (_, data) => {
        res.render('index.ejs', {blogs: JSON.parse(data)});
    });
});

app.get('/contact', (_, res) => {
    res.send('/contact');
});

app.get('/about', (_, res) => {
    res.send('/about');
});

app.get('/blog/:id', (req, res) => {
    fs.readFile('blogs.json', 'utf8', (_, data) => {
        id = req.params['id'];
        blog = JSON.parse(data)[id];
        res.render('blog.ejs', {blog: blog});
    });
});

app.listen(port, hostname, () => {
    console.log(`blog listening at http://${hostname}:${port}`);
});
