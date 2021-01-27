const express = require("express")
const routes = require("./routes")

const app = express()
app.use(express.json()) 
app.use(routes) 

app.listen(5000, () => {
    console.log("Server has started!")
})
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true", { useNewUrlParser: true })
.then(() => {
    console.log("mongo connected has started!")    
})