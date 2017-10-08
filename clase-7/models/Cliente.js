var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// Se define el objeto
var ClienteSchema = new Schema({
    id: ObjectId,
    nombre: String,
    apellido: String
});

var Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;