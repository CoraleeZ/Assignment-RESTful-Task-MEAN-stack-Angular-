const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
const server = app.listen(8000);
require('./server/routes')(app);