var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/clase3DB', { useMongoClient: true });

var Cliente = require('../models/Cliente');



function save(cliente) {
    var clienteUno = new Cliente({ nombre: cliente.nombre, apellido: cliente.apellido });
    return clienteUno.save(function(err, data) {
        if (err) throw e;
        return data;
    });
}

function update(cliente) {
    console.log("Estoy en el cliente");
    return Cliente.update({ _id: cliente.id }, { $set: { nombre: cliente.nombre, apellido: cliente.apellido } },
        function(err) {
            if (err) throw e;
            console.log("Updated");
        });
}

function remove(id) {
    console.log("Estoy en el cliente");
    return Cliente.remove({ _id: id }, function(err) {
        if (err) throw e;
        console.log("Borrado");
    });
}


function list() {
    return Cliente.find({}, function(err, clientes) {
        if (err) throw e;
        return clientes;
    });

}


module.exports = { list, save, update, remove }