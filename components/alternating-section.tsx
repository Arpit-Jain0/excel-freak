"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface AlternatingSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition?: "left" | "right"
  features?: string[]
  className?: string
}

export function AlternatingSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  features = [],
  className
}: AlternatingSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn("grid lg:grid-cols-2 gap-8 lg:gap-16 items-center", className)}>
    {/* Content */}
      <div
        className={cn(
          "space-y-6 transition-all duration-800 delay-200 px-4 sm:px-10",
          imagePosition === "right" ? "lg:order-1" : "lg:order-2",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0",
          imagePosition === "left" ? "translate-x-8" : "-translate-x-8",
        )}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">{title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        {features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className={cn(
                  "flex items-center gap-3 transition-all duration-500",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
                )}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        
      </div>

      {/* Image */}
      <div
        className={cn(
          "relative transition-all duration-800",
          imagePosition === "right" ? "lg:order-2" : "lg:order-1",
          isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 scale-95",
          imagePosition === "left" ? "-translate-x-8" : "translate-x-8",
        )}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={imageSrc || "/22.jpg"}
            alt={imageAlt}
            width={400}
            height={300}
            className="w-full h-auto object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `/22.jpg?height=400&width=600&text=${encodeURIComponent(imageAlt)}`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
        </div>
      </div>
    
    
    </div>
  )
}
