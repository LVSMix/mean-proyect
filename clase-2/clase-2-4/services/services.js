var dao = require('../dao/dao');

function get() {
    return dao.get();
}

function save() {
    return dao.save();
}

function list() {
    return dao.list();
}

function remove() {
    return dao.remove();
}

function update() {
    return dao.update();
}

module.exports = { save, remove, list, update, get }