var services = require('../services/services');

function saludo(req, res) {
    res.render('saludo', { mensaje: 'Hello World!' });
}

function holaMundo(req, res) {
    res.send('Hello World!');
}

function get(req, res) {
    res.send(services.get());
}

function listar(req, res) {
    res.send(services.list());
}

function create(req, res) {
    res.send(services.save());
}

function update(req, res) {
    res.send(services.update());
}

function remove(req, res) {
    res.send(services.remove());
}

module.exports = {
    holaMundo: holaMundo,
    get: get,
    listar: listar,
    create: create,
    update: update,
    remove: remove,
    saludo: saludo
};