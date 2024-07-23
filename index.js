import express from "express";
import "dotenv/config.js";
import cors from "cors";
import * as http from "http";
import { Server } from "socket.io";

import locationRoutes from "./routes/locationRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/usersRoutes.js";
import { CLIENT_RENEG_LIMIT } from "tls";

const PORT = process.env.PORT;
const WS_PORT = process.env.WS_PORT;
const BACKEND_URL = process.env.BACKEND_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use(cors({ origin: FRONTEND_URL }));

app.use("/locations", locationRoutes);
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${BACKEND_URL}:${PORT}`);
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected : ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID : ${socket.id} joined room ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log("socket send message");
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Web socket Server is running on ${BACKEND_URL}:${PORT}`);
});
