"use client"

import { motion } from "framer-motion"
import { HardHat, Building2, Ruler, ClipboardList, FileText } from "lucide-react"

const trustIndicators = [
  { label: "Civil Engineering", icon: HardHat },
  { label: "Building Construction", icon: Building2 },
  { label: "Road Infrastructure", icon: Ruler },
  { label: "Engineering Surveying", icon: Ruler },
  { label: "Site Supervision", icon: ClipboardList },
  { label: "Technical Consultancy", icon: FileText },
]

export default function TrustIndicators() {
  return (
    <section className="py-20 bg-[#F5F0E8] border-y border-[rgba(212,160,23,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {trustIndicators.map((indicator, i) => (
            <motion.div
              key={i}
              className="premium-card-muted flex flex-col items-center text-center p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <indicator.icon className="w-8 h-8 text-[#D4A017] mb-3" />
              <p className="text-slate-900 font-semibold text-xs sm:text-sm tracking-tight">
                {indicator.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
