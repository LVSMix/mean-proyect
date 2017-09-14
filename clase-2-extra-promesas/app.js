var express = require('express');
var app = express();
var services = require('./services/services');


app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/get', function(req, res) {
    services.get().then(function(data) {
        res.send(data);
    }).catch(function(e) {
        res.send(e);
    });

});


app.get('/list', function(req, res) {
    res.send(services.list());
})

app.post('/create', function(req, res) {
    res.send(services.save());
});

app.post('/update', function(req, res) {
    res.send(services.update());
});

app.post('/remove', function(req, res) {
    res.send(services.remove());
});


app.get('/getMovies', function(req, res) {
    services.getMovies().then(function(data) {
        res.send(data);
    }).catch(function(e) {
        res.send(e);
    })
});






app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});