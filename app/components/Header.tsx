import Link from "next/link"
import { ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            FoodieExpress
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/menu" className="hover:underline">
              Menu
            </Link>
            <Link href="/cart" className="hover:underline flex items-center">
              <ShoppingCart className="w-5 h-5 mr-1" />
              Cart
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/menu" className="hover:underline">
                  Menu
                </Link>
                <Link href="/cart" className="hover:underline flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-1" />
                  Cart
                </Link>
                <Link href="/admin/login" className="hover:underline flex items-center">
                  <User className="w-5 h-5 mr-1" />
                  Admin
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header

