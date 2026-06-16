import { Metadata } from "next"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Gidkar Contractors Limited - Professional construction and engineering company delivering quality infrastructure, building, and surveying solutions across Kenya.",
}

export default function AboutLayout({
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