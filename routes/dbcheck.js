const express = require('express')
const router = express.Router()
const linkmodel = require('../schema/mongoschema')


router.get('/', async (req,res) => {
    try{

        res.send("Welcome to th h45h dbs biatch")

    }catch(err){
        res.json({
            message: err
        })
    }
})



module.exports = router

