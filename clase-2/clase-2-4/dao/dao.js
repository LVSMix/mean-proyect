function get() {
    var cliente = {
        "nombre": "Luis",
        "apellido": "Ventocilla"
    }
    return cliente;
}

function save() {
    var cliente = {
        "nombre": "Luis",
        "apellido": "Ventocilla"
    }
    return cliente;
}

function list() {
    var clientes = [{
            "nombre": "Luis",
            "apellido": "Ventocilla"
        },
        {
            "nombre": "Pedro",
            "apellido": "Alfonso"
        }
    ];
    return clientes;
}

function remove() {
    var cliente = {
        "nombre": "Luis",
        "apellido": "Ventocilla"
    }
    return cliente;
}

function update() {
    var cliente = {
        "nombre": "Luis",
        "apellido": "Ventocilla"
    }
    return cliente;
}

module.exports = { save, remove, list, update, get }