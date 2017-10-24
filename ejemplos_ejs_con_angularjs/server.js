//server.js

//Things our app need:
var express = require('express');
var app = express();


//Setting up EJS view Engine and where to get the views from
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Serve static files under public folder
app.use(express.static(__dirname + '/public'));


//Route: server - serves index EJS page and also sends a json object to the view containing a title and a list of books
app.get('/server/', function(req, res) {

    var books = [
        { name: 'How to Win Friends and Influence People' },
        { name: 'Good to Great' },
        { name: 'The Lean Startup' },
        { name: 'The Art of the Start' },
        { name: 'Think and Grow Rich' },
        { name: 'The E Myth' },
        { name: 'Build To Last' }
    ];

    res.render('index', {
        books: books,
        title: 'EJS'
    });
});

//Route: server/bookList - serves bookList EJS (partial requested by or Angular App)
app.get('/server/bookList', function(req, res) {
    res.render('bookList');
});

//Route: client - Node will just return index.html back to the browser
app.get('/client', function(req, res) {
    res.sendFile('../../public/client/index.html');
});


app.get('*', function(req, res) {
    res.send('use /client or /server');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});