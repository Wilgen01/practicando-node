import express from "express";
import { createServer } from "node:http";
import { initializeSocket } from "./sockets/chat.js";

const PORT = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
initializeSocket(server);

app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/src/client/index.html`);
});

server.listen(PORT, () => {
  console.log(`running`);
});
