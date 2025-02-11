"use client"

import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

interface Product {
  _id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true) // Loading state
  const [error, setError] = useState<string | null>(null) // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products")
        if (response.ok) {
          const data = await response.json()
          setProducts(data.slice(0, 3)) // Get first 3 products
        } else {
          throw new Error("Failed to fetch products")
        }
      } catch (error) {
        setError("Error fetching products")
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading...</div> // Loading state
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div> // Error state
  }

  return (
    <section id="featured-products" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
