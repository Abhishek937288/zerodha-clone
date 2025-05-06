import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }

);

const Order = mongoose.model("order",orderSchema);

export default Order;