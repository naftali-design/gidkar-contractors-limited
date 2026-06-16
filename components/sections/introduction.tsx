"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const capabilities = [
  {
    id: "construction",
    title: "Building Construction",
    description:
      "Professional residential and commercial building construction services with quality assurance and timely delivery.",
    features: [
      "Residential Developments",
      "Commercial Buildings",
      "Quality Assurance",
      "Timely Delivery",
    ],
  },
  {
    id: "civil",
    title: "Civil Engineering",
    description:
      "Comprehensive civil engineering solutions for infrastructure projects including foundations, drainage, and structural works.",
    features: [
      "Structural Engineering",
      "Foundation Works",
      "Drainage Systems",
      "Infrastructure Development",
    ],
  },
  {
    id: "surveying",
    title: "Engineering Surveying",
    description:
      "Professional surveying support using modern equipment for accurate land measurement and construction layout.",
    features: [
      "Site Surveying",
      "Boundary Mapping",
      "Construction Layout",
      "Topographical Surveys",
    ],
  },
]

export default function CompanyIntroduction() {
  const [activeTab, setActiveTab] = useState("construction")
  const activeData = capabilities.find((c) => c.id === activeTab)

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
          <span className="section-eyebrow mb-4">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading">
            Professional Construction & Engineering Solutions
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 font-heading tracking-tight">
              Our Professional Capabilities
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {capabilities.map((capability) => (
                <button
                  key={capability.id}
                  onClick={() => setActiveTab(capability.id)}
                  className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
                    activeTab === capability.id
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                >
                  {capability.title}
                </button>
              ))}
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {activeData?.description}
            </p>
            <div className="space-y-3">
              {activeData?.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                  <span className="text-slate-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="premium-card relative overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/construction-capability.jpg"
                  alt="Construction site - Gidkar Contractors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
