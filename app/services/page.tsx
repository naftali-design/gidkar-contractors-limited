import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "building-construction",
    title: "Building Construction",
    image: "/images/industry-residential.jpg",
    description:
      "Professional residential and commercial building construction services with quality assurance and timely delivery. We handle everything from foundation to finishing.",
    features: [
      "Residential Developments",
      "Commercial Buildings",
      "Quality Assurance",
      "Timely Delivery",
    ],
    relatedProjects: ["Residential Apartments Ruiru", "Commercial Projects"],
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering Works",
    image: "/images/civil-engineering.jpg",
    description:
      "Comprehensive civil engineering solutions for infrastructure projects including foundations, drainage systems, and structural works.",
    features: [
      "Structural Engineering",
      "Foundation Works",
      "Drainage Systems",
      "Infrastructure Development",
    ],
    relatedProjects: ["Asian Quarters Transport Termini", "Infrastructure Projects"],
  },
  {
    id: "road-infrastructure",
    title: "Road Works & Infrastructure",
    image: "/images/industry-roads.jpg",
    description:
      "Road construction and infrastructure development solutions including upgrading to bitumen standards and drainage installation.",
    features: [
      "Road Upgrading",
      "Drainage Installation",
      "Quality Finishing",
      "Maintenance Works",
    ],
    relatedProjects: ["Kianda Road Upgrading", "Nyeri Town Roads Upgrading"],
  },
  {
    id: "surveying",
    title: "Engineering Surveying",
    image: "/images/surveying.jpg",
    description:
      "Professional surveying services using modern equipment for accurate land measurement, boundary mapping, and construction layout.",
    features: [
      "Site Surveying",
      "Boundary Mapping",
      "Construction Layout",
      "Topographical Surveys",
    ],
    relatedProjects: ["Site Preparation Surveys", "Layout Services"],
  },
  {
    id: "site-supervision",
    title: "Site Supervision",
    image: "/images/site-supervision.jpg",
    description:
      "Project supervision and site management for quality delivery, including progress monitoring and compliance assurance.",
    features: [
      "Project Oversight",
      "Quality Control",
      "Progress Monitoring",
      "Compliance Assurance",
    ],
    relatedProjects: ["All Active Projects"],
  },
  {
    id: "consultancy",
    title: "Technical Consultancy",
    image: "/images/consultancy.jpg",
    description:
      "Expert engineering advisory services for project optimization, design review, and risk assessment.",
    features: [
      "Technical Advisory",
      "Project Planning",
      "Design Review",
      "Risk Assessment",
    ],
    relatedProjects: ["Planning Phase Services"],
  },
  {
    id: "project-management",
    title: "Project Management",
    image: "/images/construction-capability.jpg",
    description:
      "Comprehensive project management from inception to completion, including timeline management and stakeholder coordination.",
    features: [
      "Timeline Management",
      "Resource Planning",
      "Budget Control",
      "Stakeholder Coordination",
    ],
    relatedProjects: ["All Major Projects"],
  },
  {
    id: "renovation",
    title: "Structural Renovation",
    image: "/images/industry-renovation.jpg",
    description:
      "Building renovation and structural improvement services including facade improvements and code compliance upgrades.",
    features: [
      "Structural Upgrades",
      "Facade Improvements",
      "Space Optimization",
      "Code Compliance",
    ],
    relatedProjects: ["Renovation Projects"],
  },
  {
    id: "draughtsmanship",
    title: "Architectural & Draughtsmanship Support",
    image: "/images/about-2.jpg",
    description:
      "Technical drawing and design support services including permit drawings and construction documentation.",
    features: [
      "Technical Drawings",
      "Design Support",
      "Documentation",
      "Permit Drawings",
    ],
    relatedProjects: ["Design & Drawing Services"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-28 py-28 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-eyebrow mb-4">Services</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-heading">
            Our Professional Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mb-10 leading-relaxed">
            Comprehensive construction and engineering solutions tailored to meet your project requirements.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="premium-card-muted p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2 min-w-0">
                    <h2 className="min-w-0 break-words text-2xl font-bold text-slate-900 mb-4 font-heading tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-2 h-2 rounded-full bg-[#D4A017] mt-2" />
                          <span className="text-slate-900">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-slate-500">
                      <span className="font-medium text-slate-700">Related Projects:</span>{" "}
                      {service.relatedProjects.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Start Your Project?
          </h2>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
