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

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
app.use("/holdings", holdingsRoute);
app.use("/positions", positionsRoute);
app.use("/orders", ordersRoute);


app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
}); 
