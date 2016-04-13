'use strict';

var email = require('simplyemail');
var express = require('express');

const PORT = 3000;
var app = express();

app.get('/cijfer/:grade?', function (req, res) {
	if (req.params.grade) {
		const num = parseFloat(req.params.grade);
		var grade = num.toString().replace('.', ',');
		var passed = num >= 5.5;
	} else {
		var grade = '9,2';
		var passed = true;
	}

	email.cijfer({
		className: 'Nederlands',
		classUrl: 'https://app.simplyhomework.nl/class/YfDrLGoRfkRoqNe6E',
		settingsUrl: 'https://app.simplyhomework.nl/settings',
		grade: grade,
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
