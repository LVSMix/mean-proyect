var http = require("http");
fs = require("fs");
var jsdom = require("jsdom");
$ = require("jquery")(new jsdom.JSDOM().window);

var options = {
    host: 'jquery.com',
    port: 80,
    path: '/'
};

var html = '';
http.get(options, function(res) {
    res.on('data', function(data) {
        // collect the data chunks to the variable named "html"
        html += data;
    }).on('end', function() {
        // the whole of webpage data has been collected. parsing time!
        var title = $(html).find('title').text();
        console.log(title);
    });
});


http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
}).listen(8888);