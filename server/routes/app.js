var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/Product')
var platCtrl = require('../controllers/Plat')




router.post('/product', productCtrl.postProduct);
router.post('/plat', platCtrl.postplat )








module.exports = router;