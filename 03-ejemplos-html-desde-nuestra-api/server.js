/* app.js */

// require and instantiate express
const express = require('express');
var path = require('path');
var app = express();

// set the view engine to ejs
app.use(express.static('views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.get('/', function(req, res) {
    res.render(
        'index', { title: 'Hey Hey Hey!', message: 'Yo Yo' })
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})