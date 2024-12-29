const express = require('express');
const router = express.Router();

const AuthorizationController = require("../controllers/AuthorizationController.js")
const controllers = new AuthorizationController()

const {checkAuth} = require("../meddleware/checkAuth.js")

/* GET users listing. */
router.post("/register", controllers.createUser)
router.post("/login", controllers.loginUser)
router.get("/me", checkAuth ,controllers.authMe)

module.exports = router;
