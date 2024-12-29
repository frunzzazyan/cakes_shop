const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

class AuthorizationServices{
    constructor(models){
        this.models = models
    }

    async createUser(body){
        const doc = await this.models.users(body)
        const user = await doc.save()
        return user
    }

    async loginUser(body){
        // intentification
        const user = await this.models.users.findOne({email : body.email})
        if(!user)return {"msg" : "invalid email or password"}
        
        // autentification
        const vallPassword = await bcrypt.compare(body.password, user.password) 
        if(!vallPassword)return {"msg" : "invalid email or password"}
        
        const token = jwt.sign({_id : user._id}, "123456", {expiresIn : "1d"})
        const {password, __v, ...userData} = user._doc
        return {...userData,token}
    }

    async authMe(id){
        const user = await this.models.users.findById(id)
        const {password, __v, ...userData} = user._doc
        return userData
    }
}

module.exports = AuthorizationServices