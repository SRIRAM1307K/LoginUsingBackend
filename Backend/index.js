const express = require('express')

const app = express()
const cors = require('cors')


app.use(cors(
    {
        origin: "https://login-using-backendfrontend.vercel.app/",
        methods: ["GET", "POST"],   
        credentials: true
    }
))

const username = "sriram"
const password = 123

app.use(express.urlencoded({extended:true}))

app.get("/login",function(req,res){
    if(req.query.username === username && Number(req.query.password) === password){
        res.send(true)
    }else{
        res.send(false)
    }
})

app.listen(3000,function(){
    console.log("Server Started....") 
})