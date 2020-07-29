const router = require("express").Router()
const linkmodel = require('../schema/mongoschema')

router.get('/', async (req,res) => {
    try{
        const linkss = await linkmodel.find()
        res.json(linkss)
    }catch(err){
        res.json({
            message: err
        })
    }
})
router.get('/:linkdomain', async (req,res) =>{
    const searchlink = req.params.linkdomain
    try
    {
    const speclink = await linkmodel.findOne({"link":searchlink})
    if (speclink === null){
        res.send("1")
    }
    else{
    res.send("0")
    }
    }catch(err){
        res.json({
            message: err
        })
    }
})

router.post('/', async (req,res) => {
    const nlink = new linkmodel({
        link:req.body.link
    })
    try{
    const addlink = await nlink.save()
    res.json(addlink)
    }
    catch(err){
        res.json({
            message:err
        })
    }
})


module.exports = router