// this file will be executed by node js under the hood
const { assert } = require('console');
const path = require('path');


// exporting something in node js
// exposing the object in node js outside of the file and webpack
module.exports = {
    // entry file
    entry: './events-01-starting-setup/src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'events-01-starting-setup', 'assets', 'scripts') // same as ./assets/scripts/
    }
};