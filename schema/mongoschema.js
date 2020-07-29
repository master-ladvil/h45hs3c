const mongoose = require("mongoose")

const linkschema = mongoose.Schema({
    link : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('checked-domains',linkschema)