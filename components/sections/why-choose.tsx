"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, Award, Target, Users, RefreshCw } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Professional Excellence",
    description: "8+ years of proven experience in construction and engineering.",
    stat: "8+ Years",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety protocols on all project sites.",
    stat: "100% Safe",
  },
  {
    icon: CheckCircle,
    title: "Quality Focus",
    description: "Commitment to quality workmanship and execution.",
    stat: "Quality Driven",
  },
  {
    icon: Users,
    title: "Technical Team",
    description: "Experienced professionals with engineering expertise.",
    stat: "20+ Experts",
  },
  {
    icon: Target,
    title: "Infrastructure Expertise",
    description: "Specialized capability in road works and civil infrastructure.",
    stat: "Infrastructure",
  },
  {
    icon: RefreshCw,
    title: "Timely Delivery",
    description: "Projects completed on schedule with quality assurance.",
    stat: "On Time",
  },
]

export default function WhyChooseGidkar() {
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
          <span className="section-eyebrow mb-4">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading">
            Why Choose Gidkar Contractors
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="premium-card h-full p-8">
                <div className="premium-icon-badge w-14 h-14 mb-6">
                  <reason.icon className="w-7 h-7 text-[#D4A017]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {reason.description}
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[#1C1C1C] font-bold text-base">
                    {reason.stat}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
