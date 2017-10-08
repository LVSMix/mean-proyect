var express = require('express');
var app = express();
var services = require('./services/services');
var apiFrutaServices = require('./services/apiFrutaServices');

bodyParser = require('body-parser');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    res.send('Hello World!');
});


app.get('/list', function(req, res) {
    services.list().then(function(data) {
        res.json(data);
    }).catch(function(e) {
        res.send(e);
    });
})

app.post('/create', function(req, res) {
    services.save(req.body).then(function(data) {
        res.json(data);
    }).catch(function(e) {
        res.send(e);
    });
});


app.get('/get', function(req, res) {
    services.get(req.query.id).then(function(data) {
        console.log("data " + data);
        res.send(data);
    }).catch(function(e) {
        console.log(e);
        res.send(e);
    });

});


app.post('/update', function(req, res) {
    services.update(req.body).then(function(data) {
        res.json(data);
    }).catch(function(e) {
        res.send(e);
    });
});

app.post('/remove', function(req, res) {
    services.remove(req.body.id).then(function(data) {
        res.json(data);
    }).catch(function(e) {
        res.send(e);
    });
});


app.get('/getMovies', function(req, res) {
    services.getMovies().then(function(data) {
        res.send(data);
    }).catch(function(e) {
        res.send(e);
    })
});

/****** frutas  *****/

app.get('/getFrutas', function(req, res) {
    apiFrutaServices.list().then(function(data) {
        res.json(data);
    }).catch(function(e) {
        res.send(e);
    });
})

app.post('/createFruta', function(req, res) {
    apiFrutaServices.save(req.body).then(function(data) {
        res.json(data);
    }).catch(function(e) {
        res.send(e);
    });
});


app.get('/getFruta', function(req, res) {
    apiFrutaServices.get(req.query.id).then(function(data) {
        console.log("data " + data);
        res.send(data);
    }).catch(function(e) {
        console.log(e);
        res.send(e);
    });

});


app.post('/updateFruta', function(req, res) {
    apiFrutaServices.update(req.body).then(function(data) {
        res.json(data);
    }).catch(function(e) {
        res.send(e);
    });
});

app.post('/removeFruta', function(req, res) {
    apiFrutaServices.remove(req.body.id).then(function(data) {
        res.json(data);
    }).catch(function(e) {
        res.send(e);
    });
});




app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});