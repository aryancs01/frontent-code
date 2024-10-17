import React, { useState } from 'react'
import { Star, Clock, BarChart, Award, PlayCircle, X } from "lucide-react"

function Button({ children, variant, className, ...props }) {
  const baseStyles = "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantStyles = variant === "outline" 
    ? "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
    : "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
  
  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  )
}

function Card({ children, className, ...props }) {
  return (
    <div className={`bg-white shadow-md rounded-lg ${className}`} {...props}>
      {children}
    </div>
  )
}

function ReviewModal({ isOpen, onClose, onSubmit }) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ rating, comment })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Add Your Review</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`${star <= rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400`}
                >
                  <Star className="h-6 w-6" />
                  <span className="sr-only">{star} stars</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              Your Review
            </label>
            <textarea
              id="comment"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="w-full">Submit Review</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function CourseDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [reviews, setReviews] = useState([
    { name: "Alice Johnson", rating: 5, comment: "This course was exactly what I needed to jumpstart my React journey. The instructor's explanations were clear and the projects were very practical." },
    { name: "Bob Smith", rating: 4, comment: "Great content and well-structured. I would have liked more advanced topics, but it's perfect for beginners and intermediate developers." },
    { name: "Charlie Brown", rating: 5, comment: "I've taken several React courses, and this one stands out. The instructor's teaching style is engaging, and the course content is up-to-date with the latest React features." }
  ])

  const handleAddReview = (newReview) => {
    setReviews([...reviews, { name: "Anonymous User", ...newReview }])
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">React.js Essentials</h2>
              <p className="text-xl text-gray-600 mb-4">Learn React.js from scratch and build modern web applications</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
                <span className="ml-2 text-sm text-gray-600">4.5 (1,234 ratings)</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Created by John Doe • Last updated 3/2023</p>
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">What you'll learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Build powerful, fast, user-friendly and reactive web apps",
                    "Apply for high-paid jobs or work as a freelancer",
                    "Understand the theory behind React",
                    "Learn all about React Hooks and React Components"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <PlayCircle className="h-5 w-5 mr-2 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Course content</h3>
                <ul className="space-y-2">
                  {[
                    { title: "1. Introduction to React", duration: "45:00" },
                    { title: "2. React Components", duration: "1:30:00" },
                    { title: "3. State and Props", duration: "2:15:00" },
                    { title: "4. Hooks in React", duration: "3:00:00" },
                    { title: "5. Building a Complete React App", duration: "4:30:00" }
                  ].map((section, index) => (
                    <li key={index} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                      <span className="font-medium">{section.title}</span>
                      <span className="text-sm text-gray-600">{section.duration}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4">Student Reviews</h3>
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center mb-2">
                        <div className="font-medium mr-2">{review.name}</div>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-6" onClick={() => setIsModalOpen(true)}>
                    Add Your Review
                  </Button>
                </div>
              </Card>
            </div>
            <div className="md:w-1/3">
              <Card className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Course thumbnail"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-3xl font-bold mb-4">$89</div>
                <Button className="w-full mb-4">Add to cart</Button>
                <Button variant="outline" className="w-full mb-4">Buy now</Button>
                <div className="text-sm text-gray-600 mb-4">30-Day Money-Back Guarantee</div>
                <div className="space-y-2">
                  {[
                    { Icon: Clock, text: "10 hours on-demand video" },
                    { Icon: BarChart, text: "4 coding exercises" },
                    { Icon: Award, text: "Certificate of completion" }
                  ].map(({ Icon, text }, index) => (
                    <div key={index} className="flex items-center">
                      <Icon className="h-5 w-5 mr-2" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReview}
      />
    </div>
  )
}