var dao = require('../dao/dao');
fs = require('fs');

var readFilePromise = function(filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, function(err, success) {
            if (err) reject(err);
            resolve(success);
        });
    });
};


function get() {
    return new Promise(function(resolve, reject) {
        try {
            resolve(dao.get());
        } catch (e) {
            reject(e);
        }
    })
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