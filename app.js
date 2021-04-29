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

function getBlogs(callback) {
    var blogs = [];

    fs.readdir('blogs', (_, files) => {
        files.forEach((file) => {
            blogs.push({
                title: path.basename(file, '.md'),
                content: markdown.toHTML(fs.readFileSync('blogs/' + file, 'utf8')),
                date: fs.statSync('blogs/' + file).ctime
            });
        });
        return callback(blogs.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        }));
    });
}

function getBlog(id, callback) {
    getBlogs((blogs) => {
        return callback(blogs[id]);
    });
}

app.get('/', (_, res) => {
    getBlogs((blogs) => {
        res.render('index.ejs', {blogs: blogs});
    });
});

app.get('/blog/:id', (req, res) => {
    getBlog(req.params['id'], (blog) => {
        res.render('blog.ejs', {blog: blog});
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

app.listen(port, hostname, () => {
    console.log(`blog listening at http://${hostname}:${port}`);
});
