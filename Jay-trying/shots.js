var urls = ["google.com","apple.com"];

const Nightmare = require('nightmare')
urls.forEach(function (url) {
    nightmare.goto(url).screenshot(path).use(function () {
        console.log('finished one');
    });
});

nightmare.run(function () {
    console.log('finished all');
});