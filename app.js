#!/usr/bin/env node
const express = require('express');
const fs = require('fs');
const routes = require('./routes');

const app = express();

/* try to load config.json */
var config;
try {
    config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
} catch (err) {
    config = JSON.parse(fs.readFileSync('config.def.json', 'utf8'));
    /* set default deployment value to development */
    config['deployment'] = 'development';
}

/* if deployment mode is development, set up express static file serving with default
 * directory as /public */
config['deployment'] == 'development' ?
    app.use(express.static(config['http']['static_dir'] || '/public')) : void(0);

/* load all express settings */
for (property in config['express'])
    app.set(property, config['express'][property]);

/* get port and hostname config with default values */
const port = config['http']['port'] || 3000;
const hostname = config['http']['hostname'] || 'localhost';

/* load routes, supply it with our express object and config */
routes(app, config);

/* run server on config.port and config.hostname */
app.listen(port, hostname, () => {
    console.log(`blog listening at http://${hostname}:${port}`);
});
