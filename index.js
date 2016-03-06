var fs = require('fs');
var email = require("simplyemail");
var nodemailer = require('nodemailer');
var tokens = require("./tokens.json");

/* To create unique subject so inbox doesn't bundle it. */
function makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

email.cijfer("Nederlands", "https://app.simplyhomework.nl/class/YfDrLGoRfkRoqNe6E", "https://app.simplyhomework.nl/settings", 5.4, 6.2, function(result){

	/* Send email */
	// create reusable transporter object using the default SMTP transport
	// gmailUrl: smtps://xxxxx%40gmail.com:password@smtp.gmail.com
	var transporter = nodemailer.createTransport(tokens.gmailUrl);

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: '"Thomas Konings" <tkon99@gmail.com>', // sender address
	    to: 'Thomas Konings, tkon99@gmail.com', // list of receivers
	    subject: 'sH test - '+makeid(), // Subject line
	    html: result // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});

	/* Save code */
	fs.writeFile('test.html', result, (err) => {
	  if (err) throw err;
	  console.log('Code saved to test.html');
	});
});