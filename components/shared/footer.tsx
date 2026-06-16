import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden">
                <Image
                  src="/images/logo.jpg"
                  alt="Gidkar Contractors Logo"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-heading">
                  Gidkar Contractors
                </span>
              </div>
            </Link>
            <p className="text-slate-400 mb-8 max-w-xs leading-relaxed">
              Professional construction, civil engineering, and infrastructure solutions
              in Kenya. Building reliable structures with technical excellence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-5 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["/", "/about", "/services", "/projects", "/contact"].map(
                (href) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="premium-link inline-block text-slate-400 text-base"
                    >
                      {href === "/"
                        ? "Home"
                        : href.slice(1).charAt(0).toUpperCase() +
                          href.slice(2).replace(/-/g, " ")}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-5 font-heading">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors text-base"
                >
                  Building Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors text-base"
                >
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors text-base"
                >
                  Road & Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors text-base"
                >
                  Engineering Surveying
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors text-base"
                >
                  Project Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-5 font-heading">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4a017] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">
                  Karson Photo House, 2nd Floor Room 5
                  <br />
                  Kimathi Way, Nyeri, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d4a017] flex-shrink-0" />
                <a
                  href="tel:+254714270797"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +254 714 270 797
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d4a017] flex-shrink-0" />
                <a
                  href="mailto:gidkarcontractors@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  gidkarcontractors@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#d4a017] flex-shrink-0" />
                <span className="text-slate-400">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Gidkar Contractors Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}