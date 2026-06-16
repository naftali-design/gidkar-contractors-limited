"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "services",
    question: "What services do you offer?",
    answer:
      "We provide building construction, civil engineering, road works, surveying, site supervision, project management, technical consultancy, structural renovation, and architectural support services.",
  },
  {
    id: "road-works",
    question: "Do you handle road works and infrastructure projects?",
    answer:
      "Yes, we specialize in road construction and upgrading. Our portfolio includes Kianda Road and Nyeri Town Roads projects completed to bitumen standards.",
  },
  {
    id: "residential",
    question: "Can you manage residential development projects?",
    answer:
      "Yes, we have completed residential apartments in Ruiru and mixed-use developments in Nyeri with quality construction and timely delivery.",
  },
  {
    id: "supervision",
    question: "Do you provide site supervision and quality control?",
    answer:
      "Yes, we provide comprehensive site management, quality control, and technical oversight throughout all project phases.",
  },
  {
    id: "quote",
    question: "How do I request a project quotation?",
    answer:
      "Contact us via our contact form, email at gidkarcontractors@gmail.com, or phone at +254 714 270 797 for an initial consultation to discuss your project requirements.",
  },
  {
    id: "location",
    question: "Where are you located?",
    answer:
      "Our head office is in Nyeri, Kenya at Karson Photo House, 2nd Floor Room 5, Kimathi Way. We serve projects across Kenya.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading">
            Frequently Asked Questions
          </h2>
        </motion.div>
        <div className="premium-card p-8 lg:p-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-slate-200 last:border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#D4A017] py-5">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 text-[0.925rem] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
