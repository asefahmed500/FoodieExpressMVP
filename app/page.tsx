import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import About from "./components/About"
import CustomerReviews from "./components/CustomerReviews"
export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedProducts />
      <About />
      <CustomerReviews />
    </div>
  )
}

