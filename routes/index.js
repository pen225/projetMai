var express = require('express');
const userController = require('../controllers/controller');
var router = express.Router();


/* GET home page. */
router.get('/', userController.accueil)

module.exports = router;
