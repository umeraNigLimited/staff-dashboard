import express from "express"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"
import 'dotenv/config'
import db from "./db/db.js"
import { staffRouter } from "./routes/staff.js"
import { taskRoute } from "./routes/task.js"


const port = process.env.PORT
const app = express()

//initialize the Server
const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin: ["http://localhost:5173" , "http://192.168.112.233:5173"],
        methods:["GET","POST"],
        credentials:true
    }
})

app.use(cors(
    {
        origin: ["http://localhost:5173" , "http://192.168.112.233:5173"],
        methods:["GET","POST"],
        credentials:true
    }
))

app.use(express.json())
app.use(cors())

db.connect()

//Routes
app.use('/api/staff-info', staffRouter)
app.use('/api/task', taskRoute)




server.listen(port, ()=> {
    console.log('App is listening on port ' + port)
});