import { Clock, Truck, ThumbsUp } from "lucide-react"

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>We ensure your food arrives hot and fresh in no time.</p>
          </div>
          <div className="text-center">
            <Truck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Wide Coverage</h3>
            <p>Our delivery network covers the entire city.</p>
          </div>
          <div className="text-center">
            <ThumbsUp className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
            <p>We partner with the best restaurants to ensure top-quality meals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

