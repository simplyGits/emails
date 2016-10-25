'use strict';

var email = require('simplyemail');
var express = require('express');

const PORT = 3000;
var app = express();

app.get('/cijfer/:grade?', function (req, res) {
	let num = parseFloat(req.params.grade);
	if (Number.isNaN(num)) {
		num = 9.2;
	}
	var grade = num.toString().replace('.', ',');
	var passed = num >= 5.5;

	email.cijfer({
		className: 'Nederlands',
		classUrl: 'https://app.simplyhomework.nl/class/YfDrLGoRfkRoqNe6E',
		settingsUrl: 'https://app.simplyhomework.nl/settings',
		grade: grade,
		description: 'Literatuurmondeling',
		passed: passed,
		average: '8,5'
	}).then(function (data) {
		res.end(data);
	});
});

app.get('/project', function (req, res) {
	email.project({
		projectName: 'Miljoenennota',
		projectUrl: 'https://app.simplyhomework.nl/class/YfDrLGoRfkRoqNe6E',
		settingsUrl: 'https://app.simplyhomework.nl/settings',
		personName: 'Henk de Bakker'
	}).then(function (data) {
		res.end(data);
	});
});

app.get('/html', function (req, res) {
	email.html({
		title: 'Test HTML email',
		body: '<h2>simplySwag</h2>',
		settingsUrl: 'https://app.simplyhomework.nl/settings'
	}).then(function (data) {
		res.end(data);
	});
});

app.listen(PORT, function () {
	console.log('Dev server running on port', PORT);
});
