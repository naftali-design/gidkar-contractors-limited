"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Gidkar Contractors delivered exceptional quality on our infrastructure project. Their professionalism and attention to detail exceeded our expectations.",
    service: "Infrastructure Development",
    rating: 5,
  },
  {
    id: 2,
    text: "Reliable engineering support and timely execution for our road works project. The team demonstrated excellent technical expertise throughout.",
    service: "Road Works",
    rating: 5,
  },
  {
    id: 3,
    text: "Quality construction services with attention to detail. Our residential project was completed on time and within budget.",
    service: "Building Construction",
    rating: 5,
  },
  {
    id: 4,
    text: "Trusted partner for construction and project management. Professional approach from consultation through to project delivery.",
    service: "Project Management",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
      6000
    )
    return () => clearInterval(interval)
  }, [autoPlay])

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow mb-4">Client Feedback</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading">
            What Our Clients Say
          </h2>
        </motion.div>
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="premium-card p-10"
            >
              <Quote className="w-12 h-12 text-[#D4A017]/20 mb-6" />
              <blockquote className="text-xl lg:text-2xl text-slate-800 mb-8 italic leading-relaxed">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-lg">Client</p>
                  <p className="text-slate-600">
                    {testimonials[currentIndex].service}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#D4A017] fill-[#D4A017]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#D4A017] ${
                  index === currentIndex
                    ? "bg-[#D4A017] w-10"
                    : "bg-slate-300 w-2.5"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
