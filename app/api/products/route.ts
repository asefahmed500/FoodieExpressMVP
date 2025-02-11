import { NextResponse } from "next/server"
import dbConnect from "@/lib/db"
import Product from "@/models/Product"

const sampleProducts = [
  {
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Chicken Burger",
    description: "Juicy chicken patty with lettuce, tomato, and special sauce",
    price: 9.99,
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80",
  },
  {
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with croutons, parmesan, and Caesar dressing",
    price: 8.99,
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
    price: 14.99,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection with lemon and herbs",
    price: 17.99,
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
]

export async function GET() {
  await dbConnect()
  let products = await Product.find({})

  if (products.length === 0) {
    // If no products in the database, add sample products
    products = await Product.insertMany(sampleProducts)
  }

  return NextResponse.json(products)
}

export async function POST(request: Request) {
  await dbConnect()
  const data = await request.json()
  const product = await Product.create(data)
  return NextResponse.json(product)
}

