import express from "express";
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json());

let connection;

app.use("/api/auth", authRoutes);

app.listen(PORT, async () => {
  console.log(`Server started at http://localhost:${PORT}`);
  connection = await connectDB();
});