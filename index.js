import express from "express";
import "dotenv/config.js";
import cors from "cors";

import locationRoutes from "./routes/locationRoutes.js";

const PORT = process.env.PORT;
const BACKEND_URL = process.env.BACKEND_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use(cors({ origin: FRONTEND_URL }));

app.use("/locations", locationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${BACKEND_URL}:${PORT}`);
});
