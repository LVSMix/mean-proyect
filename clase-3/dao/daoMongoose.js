var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/clase3DB');

var Cliente = mongoose.model('Cliente', { id: String, nombre: String, apellido: String });

function save(cliente) {
    var clienteUno = new Cliente({ name: cliente.nombre, apellido: cliente.apellido });
    clienteUno.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('meow');
        }
    });
}



module.exports = { save }