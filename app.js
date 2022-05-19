const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
require("dotenv/config")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

const dbroute = require('./routes/classifiedRoutes')
app.use('/checkdb',dbroute)

const userroute = require('./routes/user/user-auth')
app.use('/db/users', userroute)


app.get('/db',(req,res) => {
    res.send("hi")
})



mongoose.connect(process.env.db_connector,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    },() => console.log("connected to db")
    )


app.set('port', process.env.PORT || 5300)



app.listen(app.get('port'), () => console.log('listening on port ' + app.get('port')))
