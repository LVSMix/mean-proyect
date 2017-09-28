//var dao = require('../dao/dao');
var dao = require('../dao/daoMongoose');
fs = require('fs');

var readFilePromise = function(filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, function(err, success) {
            if (err) reject(err);
            resolve(success);
        });
    });
};


function save(cliente) {
    return new Promise(function(resolve, reject) {
        dao.save(cliente).then(function(cliente) {
            resolve(cliente);
        }).catch(function(e) {
            reject(e);
        });
    })
}


function list() {
    return new Promise(function(resolve, reject) {
        dao.list().then(function(clientes) {
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

function update(cliente) {
    return new Promise(function(resolve, reject) {
        dao.update(cliente).then(function(data) {
            resolve(data);
        }).catch(function(e) {
            reject(e);
        });
    });
}

function getMovies() {
    //var file = "../clase-2-extra-promesas/public/files/movies.json";
    var file = "../clase-2-extra-promesas/files/movies.json";
    return readFilePromise(file).then(function(data) {
        console.log("data =>" + data);
        return data;
    }).catch(function(e) {
        console.log("error =>" + e);
        return e;
    });
}



module.exports = { save, remove, list, update, get, getMovies }