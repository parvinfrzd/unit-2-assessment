var express = require('express');
var router = express.Router();
const todoCtrl = require('../controllers/todos');

/* GET home page. */
router.get('/', todoCtrl.index);
router.post('/', todoCtrl.addNew);
router.get('/:id?', todoCtrl.deleteTodo);
module.exports = router;
