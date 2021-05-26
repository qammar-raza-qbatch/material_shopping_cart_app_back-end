const express = require('express');
const productsController = require('../Controllers/Products');
const router = express.Router();



router.get('/products', productsController.findProducts);



module.exports = router