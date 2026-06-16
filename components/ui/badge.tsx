"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#d4a017] text-white hover:bg-[#e3b22c] focus:ring-2 focus:ring-[#d4a017]",
        secondary:
          "border-[#d4a017] bg-transparent text-[#d4a017] hover:bg-[#d4a017] hover:text-white focus:ring-2 focus:ring-[#d4a017]",
        destructive:
          "border-transparent bg-[#dc2626] text-white hover:bg-[#b91c1c] focus:ring-2 focus:ring-[#dc2626]",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }