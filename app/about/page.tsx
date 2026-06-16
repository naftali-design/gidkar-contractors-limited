"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Shield,
  CheckCircle,
  Award,
  Target,
  Users,
} from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct business with honesty and transparency in all our dealings.",
  },
  {
    icon: CheckCircle,
    title: "Quality",
    description: "Highest quality in every project we undertake.",
  },
  {
    icon: Award,
    title: "Safety",
    description: "Safety is paramount in all our operations.",
  },
  {
    icon: Target,
    title: "Professionalism",
    description: "Highest standards in all our professional dealings.",
  },
  {
    icon: Users,
    title: "Innovation",
    description: "Modern methods and engineering technology for optimal solutions.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description: "Clear communication throughout project lifecycle.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-28 py-28 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-eyebrow mb-4">About</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-heading">
            About Gidkar Contractors Limited
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mb-10 leading-relaxed">
            Professional construction and engineering company based in Nyeri, Kenya, delivering quality infrastructure, building, and surveying solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-heading">
                Company Overview
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Gidkar Contractors Limited is a professional construction and engineering company based in Nyeri, Kenya. We specialize in building construction, civil engineering, road works, and engineering surveying for clients across the region.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Since our establishment, we have successfully completed numerous infrastructure and building projects, establishing ourselves as a trusted partner in the construction industry.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our headquarters is located at Karson Photo House, 2nd Floor Room 5, Kimathi Way, Nyeri, with postal address P.O. Box 50 – Othaya, Kenya.
              </p>
            </div>
            <div className="premium-card relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-1.jpg"
                alt="Construction site - Gidkar Contractors"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-heading">
                Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 font-heading">
                    Our Mission
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    To deliver high-quality construction and engineering solutions that exceed client expectations through professional expertise, technical excellence, and unwavering commitment to safety and quality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 font-heading">
                    Our Vision
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    To be the leading construction and engineering partner in Kenya, recognized for excellence in infrastructure development and building solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="premium-card relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-2.jpg"
                alt="Engineering team - Gidkar Contractors"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-heading">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="premium-card p-8 text-center"
              >
                <value.icon className="w-12 h-12 text-[#D4A017] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center font-heading">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="premium-card p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                Engineering Surveying
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Professional surveying using modern equipment for accurate land measurement and construction layout.
              </p>
            </div>
            <div className="premium-card p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                Civil Engineering
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Structural design, foundation works, and drainage systems for infrastructure projects.
              </p>
            </div>
            <div className="premium-card p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                Project Management
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                End-to-end project management ensuring timely delivery and budget control.
              </p>
            </div>
            <div className="premium-card p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                Quality Control
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Comprehensive quality assurance throughout all project phases.
              </p>
            </div>
            <div className="premium-card p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                Site Supervision
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Professional site management and technical oversight during construction.
              </p>
            </div>
            <div className="premium-card p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                Technical Consultancy
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Expert advisory services for project optimization and risk assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-heading">
            Project Delivery Approach
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            We follow a structured approach from initial consultation through to project completion, ensuring quality and timely delivery.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
