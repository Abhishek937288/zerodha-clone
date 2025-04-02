require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");


const { HoldingsModel } = require("./model/HoldingsModel");
const UserModel = require("./model/UserModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(bodyParser.json());




app.get("/allHoldings" , async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/Orders", async (req, res) => {
  let Orders = await OrdersModel.find({});
  res.json(Orders);
});


app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    let newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    let holding = await HoldingsModel.findOne({ name });

    if (mode === "buy") {
      if (holding) {
        const totalQty = holding.qty + qty;
        holding.avg = (holding.avg * holding.qty + price * qty) / totalQty;
        holding.qty = totalQty;
        holding.price = price;
      } else {
        holding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
          net: "0",
          day: "0",
        });
      }
      await holding.save();
      return res.json({ message: "Stock purchased successfully.", holding });
    }

    if (mode === "sell") {
      if (!holding) {
        return res
          .status(400)
          .json({ message: "We don’t have this stock in your holdings." });
      }
      if (holding.qty < qty) {
        return res
          .status(400)
          .json({ message: "Not enough quantity to sell." });
      }

      holding.qty -= qty;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
        return res.json({ message: "Stock sold and removed from holdings." });
      }

      await holding.save();
      return res.json({ message: "Stock sold successfully.", holding });
    }

    return res.status(400).json({ message: "Invalid mode." });
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute); 
