import { NextResponse } from "next/server"
import dbConnect from "@/lib/db"
import Order from "@/models/Order"

export async function GET(request: Request) {
  await dbConnect()
  const { searchParams } = new URL(request.url)
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")

  const skip = (page - 1) * limit

  const orders = await Order.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit)
  const total = await Order.countDocuments()

  return NextResponse.json({
    orders,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalOrders: total,
  })
}

export async function POST(request: Request) {
  await dbConnect()
  const data = await request.json()
  const order = await Order.create(data)
  return NextResponse.json({ orderId: order._id })
}

