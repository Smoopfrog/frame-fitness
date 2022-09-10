const express = require('express');
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const port = 8000;
const db = require('./db/db.js');
const userRoutes = require('./routers/authRouter.js')
const exerciseRoutes = require('./routers/exerciseRouter.js')
require('dotenv').config();
app.use(cors());

//Socket io connection
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  }
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join", (data) => {
    console.log(data)
    socket.join(data)
    console.log(`User with ID ${socket.id} joined chat`)
  })

  socket.on("send_message", (data) => {
    console.log(data)
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`)
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING")
});

//DB connection
db.connect();

app.use(
  cors()
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/', userRoutes(db))
app.use('/', exerciseRoutes(db))

app.listen(port, () => { console.log(`Example app listening on port ${port}`) })

