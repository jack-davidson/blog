#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const hostname = 'localhost';
const port = '8000';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url == '/blog') {
        fs.readFile('blogs.json', (err, data) => {
            res.end(JSON.stringify(JSON.parse(data)));
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
