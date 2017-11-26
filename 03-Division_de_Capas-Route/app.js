var express = require('express');
var app = express();
var router = require('./config/route');


app.use(express.static('public'));

app.use('/api', router);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});