var dao = require('../dao/frutasDao');

function create(fruta) {
    return new Promise(function(resolve, reject) {
        dao.save(fruta).then(function(fruta) {
            resolve(fruta);
        }).catch(function(e) {
            reject(e);
        });
    })
}


function list() {
    return new Promise(function(resolve, reject) {
        dao.list().then(function(frutas) {
            resolve(clientes);
        }).catch(function(e) {
            reject(e);
        });
    })
}

function get(id) {
    return new Promise(function(resolve, reject) {
        try {
            resolve(dao.get(id));
        } catch (e) {
            reject(e);
        }
    })
}


function remove(id) {
    return new Promise(function(resolve, reject) {
        dao.remove(id).then(function(data) {
            resolve(data);
        }).catch(function(e) {
            reject(e);
        });
    });
}

function update(fruta) {
    return new Promise(function(resolve, reject) {
        dao.update(fruta).then(function(data) {
            resolve(data);
        }).catch(function(e) {
            reject(e);
        });
    });
}



module.exports = { create, remove, update, list, get }