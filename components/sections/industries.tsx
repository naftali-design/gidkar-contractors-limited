"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Building2, Road, Ruler, RefreshCw, Shield } from "lucide-react"

const industries = [
  {
    id: "residential",
    title: "Residential Development",
    icon: Home,
    description:
      "Custom homes and apartment complexes tailored to client specifications and lifestyle needs.",
  },
  {
    id: "commercial",
    title: "Commercial Buildings",
    icon: Building2,
    description:
      "Modern office and retail spaces delivering long-term performance and operational efficiency.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Projects",
    icon: Shield,
    description:
      "Large-scale infrastructure including water systems, public facilities, and community assets.",
  },
  {
    id: "roads",
    title: "Roads & Civil Works",
    icon: Road,
    description:
      "Road construction and upgrading to bitumen standards with finished quality surfaces.",
  },
  {
    id: "surveying",
    title: "Engineering Surveying",
    icon: Ruler,
    description:
      "Professional surveying services with modern equipment, precise measurements, and detailed documentation.",
  },
  {
    id: "renovation",
    title: "Renovation & Improvements",
    icon: RefreshCw,
    description:
      "Building renovation and facility improvements completed with minimal disruption and professional controls.",
  },
]

export default function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-eyebrow mb-4">Sectors We Serve</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading">
            Industries We Serve
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="premium-card h-full p-8">
                <div className="premium-icon-badge w-14 h-14 mb-6">
                  <industry.icon className="w-7 h-7 text-[#D4A017]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading tracking-tight">
                  {industry.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <Link
                  href={"/projects?category=" + industry.id}
                  className="premium-link inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Explore Projects
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
