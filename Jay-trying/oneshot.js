var Nightmare = require('nightmare');
var Screenshot = require('nightmare-screenshot');
var nightmare = new Nightmare();
nightmare.goto('google.com');
nightmare.use(Screenshot.screenshotSelector('element.png', 'img[id="yw0"]'));
nightmare.run();