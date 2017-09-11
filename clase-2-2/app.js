var express = require('express');
var service = require('./services/services');
var app = express();

service.save();
service.list();
service.remove();
service.update();

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});