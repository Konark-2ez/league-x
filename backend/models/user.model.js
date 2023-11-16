const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email:
   { type:String,
    required:true},
    password:String,
    firstName : String,
    lastName:String,
    socketid:{
        type:String,
        required:false,
        default:""
    }
})

userSchema.methods.comparePassword = function(enteredPassword){
    bcrypt.compare(enteredPassword,user.password,(err,isMatch)=>{
        if(err){
            return reject(err)
        }
        if(!isMatch){
            return reject(err)
        }
        resolve(true)
    })
}

mongoose.model("User",userSchema)