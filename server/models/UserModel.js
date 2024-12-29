const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserModel = new mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    age : {
        type : Number,
        required : true
    },
    day : {
        type : Number,
        required : true
    },
    month : {
        type : Number,
        required : true
    },
    year : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    country : {
        type :  String,
        default : ""
    },
    city : {
        type :  String,
        default : ""
    },
    phone_number : {
        type :  String,
        default : ""
    },
    avatar : String
})

UserModel.pre("save",async function(){
    const pass = await bcrypt.hash(this.password,10)
    this.password = pass
})

module.exports = mongoose.model("users", UserModel)