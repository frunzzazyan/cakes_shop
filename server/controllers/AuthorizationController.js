const {RegisterSchema} = require("../JoiSchema/RegisterSchema.js")
const {LoginSchema} = require("../JoiSchema/LoginSchema.js")

class AuthorizationController{
    async createUser(req,res){
        try {
            const body = await RegisterSchema.validateAsync(req.body)
            const user = await req.app.locals.services.authorization.createUser(body)
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    }
    
    async loginUser(req,res){
        try {
            const body = await LoginSchema.validateAsync(req.body)
            const user = await req.app.locals.services.authorization.loginUser(body)
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    }
    
    async authMe(req,res){
        try {
            const user = await req.app.locals.services.authorization.authMe(req.app.locals.tokenId)
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = AuthorizationController