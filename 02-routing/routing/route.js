var express = require('express');
var router = express.Router();
var services = require('../services/services');

router.get('/', function(req, res) {
    res.send('Hello World!');
});

router.get('/get', function(req, res) {
    res.send(services.get());
});

router.get('/list', function(req, res) {
    res.send(services.list());
})

router.post('/create', function(req, res) {
    res.send(services.save());
});

router.post('/update', function(req, res) {
    res.send(services.update());
});

router.post('/remove', function(req, res) {
    res.send(services.remove());
});

module.exports = router;