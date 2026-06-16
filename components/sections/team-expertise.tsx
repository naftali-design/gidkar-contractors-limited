"use client"

import { motion } from "framer-motion"
import { HardHat, Ruler, Users, Shield, FileText, Building2 } from "lucide-react"

const teamExpertise = [
  { role: "Site Engineers", icon: HardHat, expertise: "Engineering execution and site supervision.", specializations: ["Construction Oversight", "Quality Control", "Technical Implementation"] },
  { role: "Engineering Surveyors", icon: Ruler, expertise: "Professional surveying support and measurement services.", specializations: ["Site Surveying", "Land Measurement", "Construction Layout"] },
  { role: "Site Agents", icon: Users, expertise: "Site management and project coordination.", specializations: ["Project Coordination", "Team Management", "Progress Tracking"] },
  { role: "Civil Specialists", icon: Shield, expertise: "Specialized civil works and infrastructure development.", specializations: ["Road Works", "Infrastructure", "Structural Design"] },
  { role: "Technical Draughtsmen", icon: FileText, expertise: "Technical drawing and design support.", specializations: ["Technical Drawings", "Design Support", "Documentation"] },
  { role: "Quality Supervisors", icon: Building2, expertise: "Quality assurance and technical supervision.", specializations: ["Quality Assurance", "Standards Compliance", "Inspection"] },
]

export default function TeamExpertise() {
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
          <span className="section-eyebrow mb-4">Our Team</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading">
            Technical Expertise
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamExpertise.map((member, index) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="premium-card h-full p-8">
                <div className="premium-icon-badge w-16 h-16 mx-auto mb-6">
                  <member.icon className="w-8 h-8 text-[#D4A017]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 text-center font-heading tracking-tight">
                  {member.role}
                </h3>
                <p className="text-slate-600 text-sm mb-6 text-center">
                  {member.expertise}
                </p>
                <div className="space-y-2">
                  {member.specializations.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                      <span className="text-slate-900 text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
