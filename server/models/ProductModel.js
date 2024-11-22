const mongoose = require("mongoose")

const ProductModel = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    tags : {
        default : [],
        type : Array
    },
    comments : {
        default : [],
        type : Array
    }
})

module.exports = mongoose.model("products", ProductModel)