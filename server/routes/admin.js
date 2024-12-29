const express = require("express")
const router = express.Router()

const AdminController = require("../controllers/AdminController.js")
const controllers = new AdminController()

router.get("/products/count", controllers.getProductsCount)
router.get("/users/count", controllers.getUsersCount)
router.delete("/products/delete/:id", controllers.deleteProduct)
router.delete("/user/delete/:id", controllers.deleteUser)

module.exports = router