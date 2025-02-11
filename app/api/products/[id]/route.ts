import { NextResponse } from "next/server"
import dbConnect from "@/lib/db"
import Product from "@/models/Product"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const product = await Product.findById(params.id)
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }
  return NextResponse.json(product)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const data = await request.json()
  const product = await Product.findByIdAndUpdate(params.id, data, { new: true })
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }
  return NextResponse.json(product)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const product = await Product.findByIdAndDelete(params.id)
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }
  return NextResponse.json({ message: "Product deleted successfully" })
}

