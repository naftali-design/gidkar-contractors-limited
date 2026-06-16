import { Metadata } from "next"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Gidkar Contractors Limited for your construction and engineering needs. Professional construction, engineering, and infrastructure solutions in Kenya.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}