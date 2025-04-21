const OrdersModel = require("../model/OrdersModel");
const HoldingsModel = require("../model/HoldingsModel");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.user.id }).sort({ orderTime: -1 });
     res.status(200).json(orders);
  } catch (error) {
    // console.error("Error fetching orders:", error);
        res.status(500).json({ message: error.message });
  }
};

exports.newOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    let newOrder = new OrdersModel({ name, qty, price, mode, userId: req.user.id });
    await newOrder.save();

    let holding = await HoldingsModel.findOne({ name, userId: req.user.id });

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
          userId: req.user.id  
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
        await HoldingsModel.deleteOne({ name, userId: req.user.id });
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
