"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-28 py-28 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-eyebrow mb-4">Contact</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-heading">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mb-10 leading-relaxed">
            Get in touch with our team for professional construction and engineering solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-10 font-heading">
                Get in Touch
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-5 group">
                  <div className="premium-icon-badge w-14 h-14 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#D4A017]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                      Head Office
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Karson Photo House, 2nd Floor Room 5
                      <br />
                      Kimathi Way, Nyeri, Kenya
                    </p>
                  </div>
                </div>

                <div className="premium-divider" />

                <div className="flex items-start gap-5 group">
                  <div className="premium-icon-badge w-14 h-14 flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#D4A017]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                      Phone
                    </h3>
                    <a
                      href="tel:+254714270797"
                      className="premium-link inline-flex items-center gap-1 text-slate-600 text-base"
                    >
                      +254 714 270 797
                    </a>
                  </div>
                </div>

                <div className="premium-divider" />

                <div className="flex items-start gap-5 group">
                  <div className="premium-icon-badge w-14 h-14 flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#D4A017]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                      Email
                    </h3>
                    <a
                      href="mailto:gidkarcontractors@gmail.com"
                      className="premium-link inline-flex items-center gap-1 text-slate-600 text-base"
                    >
                      gidkarcontractors@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="premium-card-muted p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="premium-icon-badge w-12 h-12 flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#D4A017]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                      Working Hours
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 12:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="premium-card contact-form-card p-8 lg:p-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                    Request a Quote
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tell us about your project and we&apos;ll get back to you with a professional quotation.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
            Let Us Build Together
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to start your next construction or infrastructure project? Reach out today.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
