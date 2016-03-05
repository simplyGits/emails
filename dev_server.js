var email = require("simplyemail");
var express = require('express');
var app = express();

app.get('/cijfer', function (req, res) {
	email.cijfer("Nederlands", "https://app.simplyhomework.nl/class/YfDrLGoRfkRoqNe6E", "https://app.simplyhomework.nl/settings", 9.2, 8.5,function(html){
		res.send(html);
	});
});

app.listen(3000, function () {
	console.log('Dev server running on port 3000');
});