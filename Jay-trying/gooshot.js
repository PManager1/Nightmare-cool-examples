var Nightmare = require('nightmare'); 

console.log( ' inside gooshot .js ');

var google = new Nightmare()
  .goto('http://google.com')
  .wait()
  .pdf('google.pdf')
  .run(function() console.log('Done!));