var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var service = require('./services/services');
var app = express();

// Muestra un log de todos los request en la consola        
app.use(morgan('dev'));

app.use(express.static('public'))
    //app.use('/foo', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Permite cambiar el HTML con el método POST                   
app.use(bodyParser.text({ type: 'text/html' }));


app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/pruebaList', function(req, res) {
    service.list();
    res.send("Hola mundo");
});

app.get('/pruebaGet', function(req, res) {
    var cliente = service.get();
    res.json(cliente);
});

app.get('/pruebaSave', function(req, res) {
    var cliente = service.save();
    res.json(cliente);
});

app.get('/pruebaUpdate', function(req, res) {
    service.update();
    res.json({ message: 'hooray! welcome to our api!' });
});

app.get('/pruebaRemove', function(req, res) {
    service.remove();
});




app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});