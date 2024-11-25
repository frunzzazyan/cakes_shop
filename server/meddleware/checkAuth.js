const jwt = require("jsonwebtoken")

function checkAuth(req,res,next){
    const token = (req.headers.authorization || "").replace(/Bearer\s/, "")
    const tokenId = jwt.verify(token, "123456")
    req.app.locals.tokenId = tokenId._id
    next()
}

module.exports = {checkAuth}