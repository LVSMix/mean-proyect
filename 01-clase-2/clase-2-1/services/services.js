function list() {
    console.log("Estoy en el list");
}

function get() {
    var cliente = {
        "nombre": "Luis",
        "apellido": "Ventocilla"
    }
    return cliente;
}

function save() {
    console.log("Estoy en el save");
}

function remove() {
    console.log("Estoy en el remove");
}

function update() {
    console.log("Estoy en el update");
}

module.exports = { save, remove, list, update, get }