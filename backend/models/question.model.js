const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    topic:String,
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
})
mongoose.model("Question",questionSchema)