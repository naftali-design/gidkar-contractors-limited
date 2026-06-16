"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Calendar, MapPin, Eye, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"

const projects = [
  {
    id: 1,
    title: "Kianda Road Upgrading to Bitumen Standards",
    category: "Infrastructure",
    status: "Completed",
    location: "Nyeri, Kenya",
    image: "/images/project-kianda-road.jpg",
    description:
      "Road upgrading project to improve transportation infrastructure in Kianda area.",
    details:
      "This project involved upgrading existing earth roads to bitumen standards with proper drainage systems and culvert installation for improved accessibility.",
    challenge:
      "Limited access due to poor road conditions affecting local transportation.",
    solution:
      "Complete road upgrading to bitumen standards with proper drainage infrastructure.",
    scope:
      "Road construction, drainage systems, culvert installation, pavement marking",
    completed: "2023",
  },
  {
    id: 2,
    title: "Nyeri Town Roads Upgrading",
    category: "Road Works",
    status: "Completed",
    location: "Nyeri, Kenya",
    image: "/images/project-nyeri-roads.jpg",
    description:
      "Upgrading urban roads in Nyeri Town to bitumen standards.",
    details:
      "Comprehensive urban road upgrading covering multiple streets in Nyeri Town with modern materials and efficient drainage.",
    challenge:
      "Aging road infrastructure requiring systematic modernization across the town.",
    solution:
      "Phased road upgrading with modern materials and improved drainage systems.",
    scope:
      "Urban road upgrading, drainage works, pavement construction, street lighting",
    completed: "2022",
  },
  {
    id: 3,
    title: "Asian Quarters Transport Termini Civil Works",
    category: "Infrastructure",
    status: "Completed",
    location: "Nyeri, Kenya",
    image: "/images/project-asian-quarters.jpg",
    description:
      "Civil works for transport termini in Asian Quarters area.",
    details:
      "Major infrastructure project involving civil works for transport terminal facilities including approach roads and drainage systems.",
    challenge:
      "Complex civil engineering requirements for high-traffic transport facilities.",
    solution:
      "Comprehensive civil works design with efficient space utilization and drainage.",
    scope: "Civil works, approach roads, drainage systems, pavement works",
    completed: "2023",
  },
  {
    id: 4,
    title: "Residential Apartments Ruiru",
    category: "Residential",
    status: "Completed",
    location: "Ruiru, Kenya",
    image: "/images/project-residential-ruiru.jpg",
    description:
      "Multi-unit residential apartment development.",
    details:
      "Quality residential apartment construction project featuring modern design and durable construction methods.",
    challenge:
      "Creating affordable quality residential accommodation with efficient space planning.",
    solution:
      "Optimized construction methods maintaining quality while controlling costs.",
    scope:
      "Residential construction, structural works, finishing, utilities installation",
    completed: "2022",
  },
  {
    id: 5,
    title: "Residential & Commercial Construction Works",
    category: "Commercial",
    status: "Completed",
    location: "Nyeri, Kenya",
    image: "/images/project-residential-commercial.jpg",
    description:
      "Mixed-use residential and commercial building development.",
    details:
      "Integrated development combining residential units with commercial spaces designed for functionality and aesthetic appeal.",
    challenge:
      "Balancing residential and commercial requirements in shared building design.",
    solution:
      "Specialised design approach for mixed-use development with separate access control.",
    scope:
      "Mixed-use construction, structural engineering, MEP services",
    completed: "2021",
  },
  {
    id: 6,
    title: "Future Infrastructure Project",
    category: "Upcoming",
    status: "Upcoming",
    location: "Kenya",
    image: "/images/project-placeholder.jpg",
    description:
      "New infrastructure development project in planning phase.",
    details:
      "Upcoming project details will be shared soon.",
    challenge: "Planning phase",
    solution: "Coming soon",
    scope: "Infrastructure Development",
    completed: "2025",
  },
]

const categories = [
  "All",
  "Infrastructure",
  "Road Works",
  "Residential",
  "Commercial",
  "Surveying",
  "Renovation",
  "Upcoming",
]

const categoryAliases: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  infrastructure: "Infrastructure",
  roads: "Road Works",
  surveying: "Surveying",
  renovation: "Renovation",
  upcoming: "Upcoming",
}

const normalizeCategory = (category: string | null) => {
  if (!category) return "All"
  if (categories.includes(category)) return category
  return categoryAliases[category] ?? "All"
}

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>(
    normalizeCategory(searchParams.get("category"))
  )

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <section className="relative pt-28 py-28 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-eyebrow mb-4">Portfolio</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-heading">
            Our Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mb-10 leading-relaxed">
            Showcasing our expertise in infrastructure, road works, and building construction projects across Kenya.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeCategory === category
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="premium-card relative overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-[#1C1C1C]/25 to-transparent opacity-90" />
                    <span className="premium-badge absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold">
                      {project.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute bottom-4 right-4 w-11 h-11 rounded-full btn-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`View ${project.title}`}
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="min-w-0 break-words text-lg font-bold text-slate-900 mb-3 group-hover:text-[#D4A017] transition-colors font-heading tracking-tight">
                      {project.title}
                    </h3>
                    <p className="min-w-0 break-words text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#D4A017]" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#D4A017]" />
                        <span>{project.completed}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="px-2.5 py-1 text-xs rounded-full font-semibold bg-[#16A34A]/10 text-[#16A34A]">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="premium-card max-h-[90vh] max-w-4xl overflow-y-auto" showCloseButton={false}>
              {selectedProject && (
                <>
                  <DialogHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <DialogTitle className="text-2xl font-bold text-slate-900 font-heading pr-4">
                          {selectedProject.title}
                        </DialogTitle>
                        <DialogDescription className="text-base text-[#1C1C1C] mt-2">
                          {selectedProject.category} Project •{" "}
                          {selectedProject.completed}
                        </DialogDescription>
                      </div>
                      <DialogClose asChild>
                        <Button variant="ghost" size="icon">
                          <X className="w-4 h-4" />
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogHeader>
                  <div className="mt-6">
                    <div className="relative aspect-video overflow-hidden mb-6">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">
                          Challenge
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {selectedProject.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">
                          Solution
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {selectedProject.details}
                    </p>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <span className="text-slate-500 text-sm font-medium">Scope:</span>
                      <span className="text-slate-900 font-medium ml-2">
                        {selectedProject.scope}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
            Have a Project in Mind?
          </h2>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
