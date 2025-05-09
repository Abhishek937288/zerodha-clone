import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import holdingRoutes from "./routes/holdingRoutes.js";
import positionRoutes from "./routes/positionRoutes.js";
import { env } from "./utils/env.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";


configDotenv();

const app = express();
app.set("trust proxy", 1);

const port = env("PORT", 3000);
app.use(express.json());
app.use(cookieParser());
const limit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes.",
});
app.use(helmet());
app.use(limit);

app.use(
  cors({
    origin: env("CLIENT_URL"),
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/holdings", holdingRoutes);
app.use("/api/v1/positions", positionRoutes);



app.listen(port, () => {
  connectDB();
  console.log(`server is running on ${port}`);
});
