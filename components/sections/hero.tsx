"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const trustIndicators = [
  { label: "Civil Engineering", icon: "🏗️" },
  { label: "Infrastructure Development", icon: "🌉" },
  { label: "Building Construction", icon: "🏢" },
  { label: "Engineering Surveying", icon: "📐" },
  { label: "Site Supervision", icon: "👷" },
  { label: "Technical Consultancy", icon: "📋" },
]

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden overflow-x-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Gidkar Contractors - Professional Construction and Engineering"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C]/90 via-[#0F172A]/85 to-[#1C1C1C]/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <span className="relative inline-block">
              <span className="absolute -inset-4 rounded-[1.25rem] bg-[#D4A017]/20 blur-xl" />
              <Image
                src="/images/logo.jpg"
                alt="Gidkar Contractors Limited"
                width={72}
                height={72}
                priority
                className="rounded-[0.75rem] relative shadow-2xl"
              />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading leading-[1.1] tracking-tight"
          >
            Gidkar Contractors Limited
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-200/90 mb-14 max-w-3xl mx-auto font-light leading-relaxed tracking-tight"
          >
            Engineering Reliable Construction, Infrastructure & Building Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col gap-4 sm:w-auto sm:flex-row justify-center items-center mb-14 sm:mb-16"
          >
            <Link href="/projects">
              <span className="btn-secondary px-10 py-4 text-base inline-flex">
                View Projects
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
            <Link href="/contact">
              <span className="btn-primary px-10 py-4 text-base inline-flex">
                Request a Quote
              </span>
            </Link>
            <Link href="/contact">
              <span className="btn-dark px-10 py-4 text-base inline-flex">
                Contact Us
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {trustIndicators.map((indicator, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
                className="premium-card-muted flex flex-col items-center justify-center p-5 text-slate-900"
              >
                <span className="text-2xl mb-2">{indicator.icon}</span>
                <p className="text-[#1C1C1C] text-xs font-semibold text-center tracking-wide">
                  {indicator.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center p-6 rounded-[1.25rem] bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-[#D4A017] mb-2 font-heading tracking-tight">
              8+
            </div>
            <div className="text-white/80 text-sm font-semibold tracking-wide">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 rounded-[1.25rem] bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-[#D4A017] mb-2 font-heading tracking-tight">
              20+
            </div>
            <div className="text-white/80 text-sm font-semibold tracking-wide">
              Professionals
            </div>
          </div>
          <div className="text-center p-6 rounded-[1.25rem] bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-[#D4A017] mb-2 font-heading tracking-tight">
              50+
            </div>
            <div className="text-white/80 text-sm font-semibold tracking-wide">
              Projects Completed
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-xs mb-2 font-semibold uppercase tracking-[0.2em]">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-[#D4A017]" />
        </motion.div>
      </div>
    </section>
  )
}
