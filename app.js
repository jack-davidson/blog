#!/usr/bin/env node
const express = require('express');
const fs = require('fs');

const app = express();

const STATIC_DIR = 'static';

app.use(express.static(STATIC_DIR));
app.set(STATIC_DIR, __dirname + '/' + STATIC_DIR);
    
app.set('view engine', 'ejs');

const port = 8000;
const hostname = 'localhost';

app.get('/', (_, res) => {
    fs.readFile('blogs.json', 'utf8', (_, data) => {
        res.render('index.ejs', {blogs: JSON.parse(data)});
    });
});

app.get('/contact', (_, res) => {
    res.render('contact.ejs', {});
});

app.get('/about', (_, res) => {
    res.render('about.ejs', {});
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
