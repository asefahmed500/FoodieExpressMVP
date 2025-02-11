import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Excellent food and quick delivery. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Great variety of restaurants to choose from. Will order again.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    comment: "The food arrived hot and fresh. Amazing service!",
  },
]

const CustomerReviews = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-4">{review.comment}</p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews

