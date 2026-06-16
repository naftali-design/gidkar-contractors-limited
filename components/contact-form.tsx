"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Send, DollarSign } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  { value: "building-construction", label: "Building Construction" },
  { value: "civil-engineering", label: "Civil Engineering Works" },
  { value: "road-infrastructure", label: "Road Works & Infrastructure" },
  { value: "surveying", label: "Engineering Surveying" },
  { value: "site-supervision", label: "Site Supervision" },
  { value: "project-management", label: "Project Management" },
  { value: "consultancy", label: "Technical Consultancy" },
  { value: "renovation", label: "Structural Renovation" },
  { value: "draughtsmanship", label: "Draughtsmanship Support" },
]

const projectTypes = [
  { value: "residential", label: "Residential Development" },
  { value: "commercial", label: "Commercial Building" },
  { value: "infrastructure", label: "Infrastructure Project" },
  { value: "road-works", label: "Road Works" },
  { value: "renovation", label: "Renovation Project" },
  { value: "other", label: "Other" },
]

const budgetRanges = [
  { value: "under-500k", label: "Under KES 500,000" },
  { value: "500k-1m", label: "KES 500,000 - 1 Million" },
  { value: "1m-5m", label: "KES 1 - 5 Million" },
  { value: "5m-10m", label: "KES 5 - 10 Million" },
  { value: "over-10m", label: "Over KES 10 Million" },
  { value: "not-sure", label: "Not Sure Yet" },
]

const contactSelectContentClassName =
  "z-[1000] overflow-y-auto overflow-x-visible bg-white text-slate-900 shadow-[0_24px_60px_rgba(28,28,28,0.16)]"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [selectedProjectType, setSelectedProjectType] = useState("")
  const [selectedBudget, setSelectedBudget] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you shortly.")
        reset()
        setSelectedService("")
        setSelectedProjectType("")
        setSelectedBudget("")
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    } catch {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="premium-form-field">
          <Label htmlFor="name" className="premium-label">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-2">{errors.name.message}</p>
          )}
        </div>

        <div className="premium-form-field">
          <Label htmlFor="phone" className="premium-label">
            Phone Number
          </Label>
          <Input
            id="phone"
            placeholder="+254 700 000 000"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-2">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <Label htmlFor="email" className="premium-label">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-2">{errors.email.message}</p>
        )}
      </div>

      <div className="grid gap-6 space-y-6 md:grid-cols-2">
        <div className="premium-form-field">
          <Label htmlFor="service" className="premium-label">
            Service Required
          </Label>
          <Select
            value={selectedService}
            onValueChange={(value) => {
              setSelectedService(value)
              setValue("service", value)
            }}
          >
            <SelectTrigger
              id="service"
              className={errors.service ? "border-destructive" : ""}
              aria-invalid={!!errors.service}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              side="bottom"
              sideOffset={6}
              className={`${contactSelectContentClassName} w-[var(--radix-select-trigger-width)] border border-[#D4A017] ring-4 ring-[#D4A017]/10 [&_[data-highlighted]]:bg-[#D4A017]/10`}
            >
              {serviceOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-sm text-destructive mt-2">{errors.service.message}</p>
          )}
        </div>

        <div className="premium-form-field">
          <Label htmlFor="projectType" className="premium-label">
            Project Type
          </Label>
          <Select
            value={selectedProjectType}
            onValueChange={(value) => {
              setSelectedProjectType(value)
              setValue("projectType", value)
            }}
          >
            <SelectTrigger id="projectType">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              side="bottom"
              sideOffset={6}
              className={`${contactSelectContentClassName} w-[var(--radix-select-trigger-width)] border border-amber-500 ring-4 ring-amber-500/10 [&_[data-highlighted]]:bg-amber-500/10`}
            >
              {projectTypes.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        <Label htmlFor="budget" className="premium-label flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-[#D4A017]" />
          Budget Range
        </Label>
        <Select
          value={selectedBudget}
          onValueChange={(value) => {
            setSelectedBudget(value)
            setValue("budget", value)
          }}
        >
          <SelectTrigger id="budget">
            <SelectValue placeholder="Select budget range (optional)" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            side="bottom"
            sideOffset={6}
            className={`${contactSelectContentClassName} w-[var(--radix-select-trigger-width)] border border-orange-500 ring-4 ring-orange-500/10 [&_[data-highlighted]]:bg-orange-500/10`}
          >
            {budgetRanges.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        <Label htmlFor="message" className="premium-label">
          Project Details
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project requirements, timeline, and any specific details..."
          rows={5}
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-2">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full py-6 text-base font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Request"}
        <Send className="w-5 h-5 ml-2" />
      </Button>
    </form>
  )
}
