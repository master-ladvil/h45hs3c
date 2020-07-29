const router = require("express").Router()
const usermodel = require("../../schema/usermod")


router.get('/', async (req,res) => {
    
    try{
    const usersindb = await usermodel.find()
    res.json(usersindb)
    }catch(err){
        res.status(400).send(err)
    }
})

router.post('/', async (req,res) => {
    const upuser   = new usermodel ({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    try{
        const userup = await upuser.save()
        res.json(userup)
    }catch(err){
        res.status(400).send(err)
    }
    
})

module.exports = router 