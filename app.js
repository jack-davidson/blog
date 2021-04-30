#!/usr/bin/env node
const express = require('express');
const fs = require('fs');
const routes = require('./routes/routes');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const app = express();

const port = config['port'];
const hostname = config['hostname'];

expressConfig = config['express']
for (property in expressConfig) {
    app.set(property, expressConfig[property]);
}

app.use(express.static(config['static_dir']));

routes(app);

app.listen(port, hostname, () => {
    console.log(`blog listening at http://${hostname}:${port}`);
});
