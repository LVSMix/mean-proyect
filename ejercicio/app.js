var http = require("http");
//var jsdom = require("jsdom");
//var $ = require('jquery');


fs = require("fs");
saludo = require("./services/saludo");
saludoConNombre = require("./services/saludoConNombre");

//$('h1').html('Hola Browserify');

var html = fs.readFile("./vistas/index.html", function(err, html) {
    http.createServer(function(request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.write("<br>");
        response.write(saludo.saludo());
        response.write("<br>");
        response.write(saludoConNombre.saludoConNombre("Jorge"));
        response.end();
    }).listen(8888);
});