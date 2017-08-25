const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const moment = require('moment');

module.exports = function(app) {
	'use strict';
	app.use(express.static(path.join(__dirname,'/../../public/dist')))
	app.use(bodyParser.json())
	app.use(session({secret: "code"}));
	console.log('Middleware initialized');
};
