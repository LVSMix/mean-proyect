// New Code
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/clase3DB');



function save(cliente) {

    // Set our collection
    var collection = db.get('clientecollection');
    return collection.insert({
        "nombre": cliente.nombre,
        "apellido": cliente.apellido
    }, function(err, doc) {
        if (err) {
            // If it failed, return error
            return "There was a problem adding the information to the database.";
        } else {
            return doc;
        }
    });
}

function list() {
    var collection = db.get('clientecollection');
    return collection.find({}, {}, function(e, docs) {
        if (e) throw e;
        else return docs;
    });
}

function get(id) {
    console.log("id" + id);
    var collection = db.get('clientecollection');
    return collection.find({ "_id": id }, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
}


function remove(cliente) {
    var collection = db.get('clientecollection');
    return collection.remove({ "_id": cliente.id }, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
}

function update(cliente) {
    console.log("cliente " + cliente);
    var collection = db.get('clientecollection');
    return collection.update({ "_id": cliente.id }, { $set: { "nombre": cliente.nombre, "apellido": cliente.apellido } }, { multi: true }, function(err, obj) {
        if (err) throw err;
        console.log(obj.result + " document(s) updated");
        db.close();
    });
}

module.exports = { save, remove, list, update, get }