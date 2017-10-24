// ejecutar este archivo no server.js 
// Hacer node 08-server-autorefresh.js

var process = require('process');
var cp = require('child_process');
var fs = require("fs");
var server = cp.fork('./server.js');


fs.watchFile('./server.js', function(event, filename) {
    server.kill();
    console.log('Server stopped');
    server = cp.fork('./server.js');
    console.log('Server started');
});

fs.watchFile('08-index-async.html', function(event, filename) {
    server.kill();
    console.log('Server stopped');
    server = cp.fork('./server.js');
    console.log('Server started');
});



process.on('SIGINT', function() {
    server.kill();
    fs.unwatchFile('./server.js');
    process.exit();
});