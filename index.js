'use strict';

const fs = require('fs');
const email = require('simplyemail');
const nodemailer = require('nodemailer');
const tokens = require('./tokens.json');

/* To create unique subject so inbox doesn't bundle it. */
const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function genId () {
	let text = '';

	for (let i = 0; i < 5; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
const util = require('util');

console.log('Welke template verzenden?');
process.stdin.on('data', function (text) {
	console.log('User gave input: ', util.inspect(text));
	text = text.replace(/\W/g, '');
	if (text === 'cijfer') {
		email.cijfer({
			className: 'Nederlands',
			classUrl: 'https://app.simplyhomework.nl/class/YfDrLGoRfkRoqNe6E',
			settingsUrl: 'https://app.simplyhomework.nl/settings',
			grade: '5,4',
			passed: false,
			average: '6,2',
		}).then(function(result){
			console.log(result);
			sender(result, text);
		}, function(error){
			console.log(error);
		});
	} else if (text === 'project') {
		email.project({
			projectName: 'Miljoenennota',
			projectUrl: 'https://app.simplyhomework.nl/class/YfDrLGoRfkRoqNe6E',
			settingsUrl: 'https://app.simplyhomework.nl/settings',
			personName: 'Henk de Bakker',
		}).then(function(result){
			console.log(result);
			sender(result, text);
		}, function(error){
			console.log(error);
		});
	} else if (text === 'html'){
		email.html({
			title: 'Test HTML email',
			body: '<h2>simplySwag</h2>',
			settingsUrl: 'https://app.simplyhomework.nl/settings',
		}).then(function(result){
			console.log(result);
			sender(result, text);
		}, function(error){
			console.log(error);
		});
	} else {
		throw new Error('template not found');
	}
});

function sender (result, template) {
	/* Send email */
	// create reusable transporter object using the default SMTP transport
	// gmailUrl: smtps://xxxxx%40gmail.com:password@smtp.gmail.com
	const transporter = nodemailer.createTransport(tokens.gmailUrl);

	// setup e-mail data with unicode symbols
	const mailOptions = {
		from: '"Thomas Konings" <tkon99@gmail.com>', // sender address
		to: 'Thomas Konings, tkon99@gmail.com', // list of receivers
		subject: `sH test - ${template} - ${genId()}`,
		html: result, // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function (error, info) {
		if (error != null) {
			return console.log(error);
		}
		console.log('Message sent: ' + info.response);
		process.exit();
	});

	/* Save code */
	fs.writeFile('test.html', result, function (err) {
		if (err) {
			throw err;
		}
		console.log('Code saved to test.html');
	});
}
