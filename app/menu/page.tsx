"use client"

import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"

interface Product {
  _id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

export default function MenuPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true) // New loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products")
        if (response.ok) {
          const data = await response.json()
          setProducts(data)
        } else {
          throw new Error("Failed to fetch products")
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false) // Set loading to false after fetching
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div className="text-center">Loading...</div> // Loading indicator
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}
