import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">FoodieExpress</h2>
          <p className="mt-2">Delicious food, delivered to your doorstep.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <Facebook />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Twitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Instagram />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center text-sm">
        <p>&copy; 2023 FoodieExpress. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

