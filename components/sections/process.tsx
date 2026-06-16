"use client"

import { motion } from "framer-motion"
import {
  MessageSquare,
  ClipboardList,
  Search,
  Hammer,
  ClipboardCheck,
  PackageCheck,
} from "lucide-react"

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "Initial project discussion and requirements assessment.",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "Planning",
    description: "Detailed project planning and resource allocation.",
    icon: ClipboardList,
  },
  {
    step: 3,
    title: "Assessment",
    description: "Technical evaluation and design considerations.",
    icon: Search,
  },
  {
    step: 4,
    title: "Construction",
    description: "Professional execution with quality monitoring.",
    icon: Hammer,
  },
  {
    step: 5,
    title: "Inspection",
    description: "Quality assurance and compliance verification.",
    icon: ClipboardCheck,
  },
  {
    step: 6,
    title: "Delivery",
    description: "Project completion and handover.",
    icon: PackageCheck,
  },
]

export default function ProjectProcess() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-eyebrow mb-4">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading">
            Project Delivery Process
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="premium-card-muted p-6">
                <div className="relative mb-6">
                  <div className="premium-icon-badge w-16 h-16 mx-auto rounded-full flex items-center justify-center font-bold text-xl shadow-sm">
                    {step.step}
                  </div>
                  <div className="absolute -top-1 -right-1 premium-icon-badge w-9 h-9 rounded-full flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-[#D4A017]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
