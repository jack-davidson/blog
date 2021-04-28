#!/usr/bin/env node
const express = require('express');
const fs = require('fs');
const path = require('path');
const markdown = require('markdown').markdown;

const port = 3000;
const hostname = 'localhost';

const app = express();

const STATIC_DIR = 'static';

app.use(express.static(STATIC_DIR));
app.set(STATIC_DIR, __dirname + '/' + STATIC_DIR);
    
app.set('view engine', 'ejs');

app.get('/', (_, res) => {
    fs.readdir('blogs', (_, files) => {
        var blogs = [];
        files.forEach((file) => {
            blogs.push({
                title: path.basename(file, '.md'),
                content: markdown.parse(fs.readFileSync('blogs/' + file, 'utf8')),
                date: fs.statSync('blogs/' + file).ctime.toDateString()
            });
        });
        res.render('index.ejs', {blogs: blogs});
    });
});

app.get('/portfolio', (_, res) => {
    res.render('portfolio.ejs', {});
});

app.get('/contact', (_, res) => {
    res.render('contact.ejs', {});
});

app.get('/about', (_, res) => {
    res.render('about.ejs', {});
});

app.get('/blog/:id', (req, res) => {
    fs.readdir('blogs', (_, files) => {
        blogs = [];
        files.forEach((file) => {
            blogs.push({
                title: path.basename(file, '.md'),
                content: markdown.toHTML(fs.readFileSync('blogs/' + file, 'utf8')),
                date: fs.statSync('blogs/' + file).ctime.toDateString()
            });
        });
        blog = blogs[req.params['id']];
        res.render('blog.ejs', {blog: blog});
    });
});

app.listen(port, hostname, () => {
    console.log(`blog listening at http://${hostname}:${port}`);
});
