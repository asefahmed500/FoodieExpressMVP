import { NextResponse } from "next/server"
import dbConnect from "@/lib/db"
import Order from "@/models/Order"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const order = await Order.findById(params.id)
  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 })
  }
  return NextResponse.json(order)
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const data = await request.json()
  const order = await Order.findByIdAndUpdate(params.id, data, { new: true })
  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 })
  }
  return NextResponse.json(order)
}

