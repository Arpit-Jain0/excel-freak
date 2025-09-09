"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ModernSectionProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "alternate" | "primary"
  animate?: "fade" | "slide-left" | "slide-right" | "scale"
}

export function ModernSection({ children, className, variant = "default", animate = "fade" }: ModernSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const variants = {
    default: "bg-background",
    alternate: "bg-secondary/50",
    primary: "bg-primary text-primary-foreground",
  }

  const animations = {
    fade: "reveal",
    "slide-left": "reveal-left",
    "slide-right": "reveal-right",
    scale: "reveal",
  }

  return (
    <section
      ref={ref}
      className={cn(
        "py-16 sm:py-20 lg:py-24 transition-all duration-700",
        variants[variant],
        animations[animate],
        isVisible && "revealed",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
