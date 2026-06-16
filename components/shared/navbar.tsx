"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_8px_24px_-8px_rgba(17,24,39,0.12)] border-b border-slate-200/60"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <Image
                src="/images/logo.jpg"
                alt="Gidkar Contractors Limited"
                width={56}
                height={56}
                priority
                className="rounded-[0.75rem] transition-transform duration-300 group-hover:scale-105 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-slate-900 font-heading tracking-tight">
                Gidkar Contractors
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-semibold relative transition-colors duration-300",
                  pathname === item.href
                    ? "text-[#1C1C1C]"
                    : "text-slate-600 hover:text-[#D4A017]"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-[#D4A017] transition-all duration-300",
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+254714270797"
              className="hidden md:inline-flex"
            >
              <span
                className="btn-primary h-11 px-6 text-base"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </span>
            </a>

            <button
              className="md:hidden p-2.5 rounded-[0.75rem] hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-slate-900" />
              ) : (
                <Menu className="h-6 w-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/60"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-5 py-3.5 text-lg font-semibold rounded-[0.75rem] transition-all",
                    pathname === item.href
                      ? "bg-[#D4A017]/10 text-[#1C1C1C]"
                      : "text-slate-900 hover:bg-slate-50 hover:text-[#D4A017]"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+254714270797"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                <span className="btn-primary w-full mt-4 px-6 py-3.5">
                  <Phone className="w-4 h-4" />
                  Call Us
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
