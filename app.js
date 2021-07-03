#!/usr/bin/env node
const express = require('express');
const fs = require('fs');
const routes = require('./routes');

const app = express();

var config;
try {
    config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
} catch (err) {
    config = JSON.parse(fs.readFileSync('config.def.json', 'utf8'));
    config['deployment'] = 'development';
}

config['deployment'] == 'development' ?
    app.use(express.static(config['http']['static_dir'] || '/public')) : void(0);

for (property in config['express'])
    app.set(property, config['express'][property]);

const port = config['http']['port'] || 3000;
const hostname = config['http']['hostname'] || 'localhost';

routes(app, config);

app.listen(port, hostname, () => {
    console.log(`blog listening at http://${hostname}:${port}`);
});
