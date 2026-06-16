import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Gidkar Contractors Limited",
    template: "%s | Gidkar Contractors Limited",
  },
  description: "Professional construction, civil engineering, and infrastructure solutions in Nyeri, Kenya. Specializing in road works, building construction, and engineering surveying.",
  keywords: [
    "construction",
    "civil engineering",
    "infrastructure",
    "road works",
    "surveying",
    "building construction",
    "Nyeri",
    "Kenya",
  ],
  authors: [{ name: "Gidkar Contractors Limited" }],
  creator: "Gidkar Contractors Limited",
  metadataBase: new URL("https://gidkarcontractors.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gidkarcontractors.com",
    title: "Gidkar Contractors Limited",
    description: "Professional construction, civil engineering, and infrastructure solutions in Nyeri, Kenya.",
    siteName: "Gidkar Contractors Limited",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gidkar Contractors Limited - Construction & Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gidkar Contractors Limited",
    description: "Professional construction, civil engineering, and infrastructure solutions in Nyeri, Kenya.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth",
        playfairDisplay.variable,
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col font-body antialiased overflow-x-hidden">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}