"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#1c1c1c]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-full mb-6 backdrop-blur-sm">
            Get Started
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Let Us Build Your Next Project
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact our team for professional construction and engineering solutions
            tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/contact"
              className="btn-primary px-10 py-4 inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <a href="tel:+254714270797">
              <motion.span
                className="btn-secondary px-10 py-4 inline-flex"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}