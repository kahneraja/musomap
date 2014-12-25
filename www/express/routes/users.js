var express = require('express');
var userCtrl = require('../controllers/user.server.controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  return userCtrl.list(req, res);
});

module.exports = router;
