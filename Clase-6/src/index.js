import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";

const PORT = process.env.PORT || 3000
const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', () => {
    console.log("user connected by socket");
})

app.get('/', (req, res) => {
    res.sendFile(`${process.cwd()}/src/client/index.html`)
})


server.listen(PORT, () => {
    console.log(`running`);
})