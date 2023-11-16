const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const router = express.Router()
const User = mongoose.model("User")

router.post("/signup",async(req,res)=>{
    const { email,password,firstName,lastName}=req.body
    try{
        const user = new User({
            email,password,firstName,lastName
        })
        await user.save()
        const token  = jwt.sign({userId:user._id},jsonKey)
        res.send({token})
    }
    catch(err){
        return res.status(401).send(err.message)
    }
})

router.post("/login",async(req,res)=>{
    const {email,password} = req.body
    if(!email||!password){
        return res.status(401).send({error:"invalid credentials"})
    }
    try{
        await user.comparePassword(password)
        const token = jwt.sign({userId:user._id,jsonKey})
        res.send({token})
    }
    catch(err){
        return res.status(401).send({error:"Provide correct credentials"})
    }
})

module.exports = router;