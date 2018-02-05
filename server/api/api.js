const http = require("http");
const process = require("process");
const url = require('url');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const engine = require('consolidate');

var port = process.env.apiport || 3000;

app.use(express.static(path.join(__dirname, 'view')));
app.set('views', __dirname + '/view');
app.engine('html', engine.mustache);
app.set('view engine', 'html');
//generic functionality with api docs
//fetch from database and list as json
app.get('/check', function (req, res) {
    res.send('welcome to cryptomania');
});

process.setMaxListeners(0);
const server = http.createServer(app);
server.listen(port);
 