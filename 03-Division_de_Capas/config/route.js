var express = require('express');
var controller = require('../controllers/controller');

module.exports = function router(app) {

    app.get('/', controller.holaMundo);

    app.get('/get', controller.get);

    app.get('/list', controller.listar);

    app.post('/create', controller.create);

    app.post('/update', controller.update);

    app.post('/remove', controller.remove);

}