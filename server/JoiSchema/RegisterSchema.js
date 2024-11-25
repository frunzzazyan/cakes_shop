const joi = require("joi")

const RegisterSchema = joi.object({
    first_name : joi.string().required(),
    last_name : joi.string().required(),
    email : joi.string().email().required(),
    age : joi.number().min(14).required(),
    day : joi.number().min(1).max(31).required(),
    month : joi.number().min(1).max(12).required(),
    year : joi.number().min(1920).max(2010).required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    rpassword: joi.ref('password'),
})

module.exports = {RegisterSchema}