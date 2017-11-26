var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');

router.get('/', controller.holaMundo);

router.get('/get', controller.get);

router.get('/list', controller.listar);

router.post('/create', controller.create);

router.post('/update', controller.update);

router.post('/remove', controller.remove);

module.exports = router;