import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to FoodieExpress</h1>
        <p className="text-xl md:text-2xl mb-8">Delicious meals, delivered fast to your doorstep</p>
        <Button asChild>
          <Link href="#featured-products">Order Now</Link>
        </Button>
      </div>
    </div>
  )
}

export default Hero

