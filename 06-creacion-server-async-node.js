var http = require("http");
fs = require("fs");

var html = fs.readFile("./06-index-async2.html", function(err, html) {
    http.createServer(function(request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(8888);
});