require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");


const holdingsRoute = require("./Routes/HoldingsRoute");
const positionsRoute = require("./Routes/PositionsRoute");
const ordersRoute = require("./Routes/OrdersRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/holdings", holdingsRoute);
app.use("/api/v1/positions", positionsRoute);
app.use("/api/v1/orders", ordersRoute);


app.listen(PORT, () => {
  console.log(`server runing on: http://localhost:${PORT}`)
  mongoose.connect(uri);
  console.log("DB started!");
}); 
