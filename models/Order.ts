import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerAddress: { type: String, required: true },
  items: [
    {
      _id: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Processing", "Delivered"], default: "Pending" },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)

