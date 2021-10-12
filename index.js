const browserObject = require('./browser');
const scraperController = require('./pageController');
var connection = require('./database');
const res = require('express/lib/response');


//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

scraperController(browserInstance);



