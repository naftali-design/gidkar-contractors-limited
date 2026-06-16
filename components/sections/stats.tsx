"use client"

import { motion } from "framer-motion"
import { HardHat, Building2, Users, Shield } from "lucide-react"

const stats = [
  { value: 8, suffix: "+", label: "Years Experience", icon: HardHat },
  { value: 20, suffix: "+", label: "Professionals", icon: Users },
  { value: 50, suffix: "+", label: "Projects Completed", icon: Building2 },
  { value: 6, suffix: "+", label: "Core Service Areas", icon: Shield },
]

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="section-eyebrow mb-4 inline-block">
            Professional Credentials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1C1C1C] mt-4 font-heading">
            Our Professional Credentials
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="premium-card text-center p-8 hover:border-[rgba(212,160,23,0.38)]"
            >
              <div className="premium-icon-badge w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center bg-[rgba(212,160,23,0.12)]">
                <stat.icon className="w-7 h-7 text-[#D4A017]" />
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-[#D4A017] mb-2 font-heading tracking-tight">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-[#1C1C1C] font-bold text-base sm:text-lg tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
