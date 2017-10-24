var http = require("http");
fs = require("fs");
suma = require("./suma");


var html = fs.readFile("./07-index-async.html", function(err, html) {
    http.createServer(function(request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(suma.suma(1, 2).toString());
        response.write("<br>");
        response.write(suma.resta(1, 2).toString());
        response.write(html);
        response.end();
    }).listen(8888);
});