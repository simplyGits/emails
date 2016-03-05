# emails
Source code for our emails.

## Basic usage
```npm install``` in the main directory.\
```npm install``` in the ```node_modules\simplymail``` directory.

```npm run serve``` to start the development server located in dev_server.js\
```npm run send``` to export the html to test.html and to send a test email to gmailUrl (saved in tokens.json)

## Locations
The whole main directory is basically a wrapper around the simplymail module.\
So the "real" source code of the templates is located in the ```node_modules\simplymail``` direcotry.\
The main files inside that folder are the different email types. (Such as cijfers.jade).\
The common code for these files (the template) is located in ```node_modules\simplymail\template```.\
The style for the template can be found in the template directory in ```statics\styles.css```.