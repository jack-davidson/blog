#!/usr/bin/env node
const express = require('express');
const fs = require('fs');
const routes = require('./routes/routes');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const app = express();


/* load server config from config, if nonexistent, use default config */
var serverConfig;
if ('server' in config)
    serverConfig = config['server'];
else {
    serverConfig = {
        static_dir: "public",
        port: 3000,
        hostname: "localhost"
    };
}

/* load hostname number from config, if nonexistent, use default hostname */
var port;
if ('port' in serverConfig)
    port = serverConfig['port'];
else
    port = 3000;

/* load hostname from config, if nonexistent, use default hostname */
var hostname;
if ('hostname' in serverConfig)
    hostname = serverConfig['hostname'];
else
    hostname = "localhost";

/* set up static dir if not in production */
if ('deployment' in config) {
    if (config['deployment'] == 'development')
        app.use(express.static(serverConfig['static_dir']));
}

expressConfig = config['express']
for (property in expressConfig) {
    app.set(property, expressConfig[property]);
}


routes(app, config);

app.listen(port, hostname, () => {
    console.log(`blog listening at http://${hostname}:${port}`);
});
