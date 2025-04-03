const { OrdersModel } = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");

exports.getAllOrders = async (req, res) => {
  try {
    let Orders = await OrdersModel.find({});
    res.json(Orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.newOrder = async (req, res) => {
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
};