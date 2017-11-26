var fs = require('fs');

var readFilePromise = function(filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, function(err, success) {
            if (err)
                reject(err);
            resolve(success);
        });
    });
};

var file = "../files/movies.json";

readFilePromise.then(function(file) {
    console.log("Exito");
}).catch(function(e) {
    console.log("Error");
});