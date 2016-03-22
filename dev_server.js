'use strict';

var email = require('simplyemail');
var express = require('express');

const PORT = 3000;
var app = express();

app.get('/cijfer', function (req, res) {
	email.cijfer({
		className: 'Nederlands',
		classUrl: 'https://app.simplyhomework.nl/class/YfDrLGoRfkRoqNe6E',
		settingsUrl: 'https://app.simplyhomework.nl/settings',
		grade: '9,2',
		passed: true,
		average: '8,5'
	}).then(function (res) {
		res.end(res);
	});
});

app.get('/project', function (req, res) {
	email.project({
		projectName: 'Miljoenennota',
		projectUrl: 'https://app.simplyhomework.nl/class/YfDrLGoRfkRoqNe6E',
		settingsUrl: 'https://app.simplyhomework.nl/settings',
		personName: 'Henk de Bakker'
	}).then(function (res) {
		res.end(res);
	});
});

app.listen(PORT, function () {
	console.log('Dev server running on port', PORT);
});
