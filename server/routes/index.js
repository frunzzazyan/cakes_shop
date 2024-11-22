var express = require('express');
var router = express.Router();


const ProductsControllers = require("../controllers/ProductsControllers.js")
const controllersProducts = new ProductsControllers()

const CommentsControllers = require("../controllers/CommentsControllers.js")
const controllersComments = new CommentsControllers()

/* GET home page. */
router.get('/', controllersProducts.getProducts);
router.get('/count', controllersProducts.getProductsCount);
// router.get('/firstMessage', controllersComments.getFirstMessage);

module.exports = router;
