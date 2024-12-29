const express = require('express');
const router = express.Router();


const ProductsControllers = require("../controllers/ProductsControllers.js")
const controllers = new ProductsControllers()


/* GET home page. */
router.get('/', controllers.getProducts);
router.get('/count', controllers.getProductsCount);
router.get("/:id", controllers.getProduct)
// router.get('/firstMessage', controllersComments.getFirstMessage);

module.exports = router;
