import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";

const PORT = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("user connected by socket");

  io.emit("connection", socket.handshake.auth.username ?? "anónimo")

  socket.on('disconnect', () => {
    io.emit("disconnection", socket.handshake.auth.username ?? "anónimo")
  })

  socket.on("message", (message) => {
    const username = socket.handshake.auth.username ?? "anónimo"
    io.emit("message", message, username);
  });
});

app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/src/client/index.html`);
});

server.listen(PORT, () => {
  console.log(`running`);
});
