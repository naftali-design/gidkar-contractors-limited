"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  HardHat,
  Road,
  Ruler,
  ClipboardList,
  FileText,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    id: "building-construction",
    icon: Building2,
    title: "Building Construction",
    image: "/images/industry-residential.jpg",
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
    id: "civil-engineering",
    icon: HardHat,
    title: "Civil Engineering Works",
    image: "/images/civil-engineering.jpg",
    description:
      "Foundation and civil works for infrastructure projects including structural and drainage systems.",
    features: [
      "Structural Engineering",
      "Foundation Works",
      "Drainage Systems",
      "Infrastructure Development",
    ],
  },
  {
    id: "road-infrastructure",
    icon: Road,
    title: "Road Works & Infrastructure",
    image: "/images/industry-roads.jpg",
    description:
      "Road construction and upgrading to bitumen standards with reliable finishing and drainage installation.",
    features: [
      "Road Upgrading",
      "Drainage Installation",
      "Quality Finishing",
      "Maintenance Works",
    ],
  },
  {
    id: "surveying",
    icon: Ruler,
    title: "Engineering Surveying",
    image: "/images/surveying.jpg",
    description:
      "Professional surveying services using modern equipment for accurate land measurement and construction layout.",
    features: [
      "Site Surveying",
      "Boundary Mapping",
      "Construction Layout",
      "Topographical Surveys",
    ],
  },
  {
    id: "site-supervision",
    icon: ClipboardList,
    title: "Site Supervision",
    image: "/images/site-supervision.jpg",
    description:
      "Project supervision and site management for quality delivery with controlled progress and standards tracking.",
    features: [
      "Project Oversight",
      "Quality Control",
      "Progress Monitoring",
      "Compliance Assurance",
    ],
  },
  {
    id: "consultancy",
    icon: FileText,
    title: "Technical Consultancy",
    image: "/images/consultancy.jpg",
    description:
      "Expert engineering advisory services for project optimization, design review, and practical risk assessment.",
    features: [
      "Technical Advisory",
      "Project Planning",
      "Design Review",
      "Risk Assessment",
    ],
  },
  {
    id: "project-management",
    icon: ClipboardList,
    title: "Project Management",
    image: "/images/construction-capability.jpg",
    description:
      "Comprehensive project management from inception to completion with clear stakeholder coordination.",
    features: [
      "Timeline Management",
      "Resource Planning",
      "Budget Control",
      "Stakeholder Coordination",
    ],
  },
  {
    id: "renovation",
    icon: Building2,
    title: "Structural Renovation",
    image: "/images/industry-renovation.jpg",
    description:
      "Building renovation and structural improvement services with focused scope and code compliance attention.",
    features: [
      "Structural Upgrades",
      "Facade Improvements",
      "Space Optimization",
      "Code Compliance",
    ],
  },
  {
    id: "draughtsmanship",
    icon: FileText,
    title: "Architectural & Draughtsmanship Support",
    image: "/images/about-2.jpg",
    description:
      "Technical drawing and design support services for permit-ready documentation and accurate build deliverables.",
    features: [
      "Technical Drawings",
      "Design Support",
      "Documentation",
      "Permit Drawings",
    ],
  },
]

export default function ServicesPreview() {
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
          <span className="section-eyebrow mb-4">Our Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading">
            Professional Services
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="premium-card h-full p-8">
                <div className="premium-icon-badge w-14 h-14 mb-6">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-30 transition-opacity"
                      sizes="56px"
                    />
                  )}
                  <service.icon className="w-7 h-7 relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2.5 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                      <span className="text-slate-900 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="premium-link inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link href="/services" className="inline-flex">
            <span className="btn-primary px-8 py-4 text-base">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
