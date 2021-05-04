#!/usr/bin/env node
const express = require('express');
const fs = require('fs');
const routes = require('./routes/routes');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const app = express();

config['deployment'] == 'development' ? app.use(express.static(config['http']['static_dir'] || '/public')): void(0);

/* load express settings */
expressConfig = config['express']
for (property in expressConfig) {
    app.set(property, expressConfig[property]);
}

const port = config['http']['port'] || 3000;
const hostname = config['http']['hostname'] || 'localhost';

/* load routes, supply it with our express object and config */
routes(app, config);

/* run server on config.port and config.hostname */
app.listen(port, hostname, () => {
    console.log(`blog listening at http://${port}:${port}`);
});
