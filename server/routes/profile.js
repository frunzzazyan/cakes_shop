const express = require("express")
const router = express.Router()


const ProfileController = require("../controllers/ProfileController.js")
const controllers = new ProfileController()

const multer = require("multer")
const path = require("path")
const { log } = require("console")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    log(file)
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })

router.post("/avatar:id" , upload.single("avatar"), controllers.changeAvatar)

module.exports = router