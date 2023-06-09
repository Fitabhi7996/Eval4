const express = require("express")
const cors = require("cors")
const connection = require("./db")
const userRoutes = require("./routes/user.routes")
const postRoutes = require("./routes/post.route")
const auth = require("./middleware/auth")
const server = express()

server.use(express.json())
server.use(cors())

server.use("/users", userRoutes)

server.use(auth)
server.use("/posts", postRoutes)


server.listen(4567, async()=>{
    try{
        await connection
        console.log("connection to db")

    }
    catch(err){
        console.log(err)
    }

    console.log("Server running at port 4567")
})