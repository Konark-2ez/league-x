const express = require('express')
const app = express()
const cors = require("cors")
const {router} = require("./routes/userRoute")
const PORT = 3000

const server =  require("http").createServer(app)
app.use(cors())

server.listen(PORT,()=>{
    console.log("server is listening")
})