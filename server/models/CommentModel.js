const mongoose = require("mongoose")

const CommentModel = new mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
})

module.exports = mongoose.model("comments", CommentModel)