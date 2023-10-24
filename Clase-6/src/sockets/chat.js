import { Server } from "socket.io";

export const initializeSocket = (server) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("user connected by socket");

    io.emit("connection", socket.handshake.auth.username ?? "anónimo");

    socket.on('disconnect', () => {
      io.emit("disconnection", socket.handshake.auth.username ?? "anónimo");
    });

    socket.on("message", (message) => {
      const username = socket.handshake.auth.username ?? "anónimo";
      io.emit("message", message, username);
    });
  });

  return io;
};
