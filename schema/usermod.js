const mongoose = require("mongoose")

const newUser = mongoose.Schema({

    name : {
        type: String,
        required : true
    },
    email : {
        type : String,
        required: true
    },
    password:{
        type : String,
        required : true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

module.exports = ("UserDB", newUser)