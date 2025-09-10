"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import {
  Globe,
  BarChart3,
  QrCode,
  ShoppingCart,
  Palette,
  CreditCard,
  TrendingUp,
  Database,
  Smartphone,
  Users,
} from "lucide-react"

const services = [
  { icon: Globe, label: "Web Development", color: "text-blue-400" },
  { icon: BarChart3, label: "Financial Dashboards", color: "text-green-400" },
  { icon: QrCode, label: "QR Code Design", color: "text-purple-400" },
  { icon: ShoppingCart, label: "Sales Management", color: "text-orange-400" },
  { icon: Palette, label: "Branding Design", color: "text-pink-400" },
  { icon: CreditCard, label: "Business Cards", color: "text-cyan-400" },
  { icon: TrendingUp, label: "Business Growth", color: "text-yellow-400" },
  { icon: Database, label: "Data Solutions", color: "text-indigo-400" },
  { icon: Smartphone, label: "Mobile Apps", color: "text-red-400" },
  { icon: Users, label: "Team Management", color: "text-emerald-400" },
]

export function SlidingServiceIcons() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative overflow-hidden py-8">
      <div className="flex space-x-8 animate-slide-left-continuous">
        {/* First set of icons */}
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={`first-${index}`}
              className={cn(
                "flex-shrink-0 flex flex-col items-center space-y-2 transition-all duration-500",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-card/80",
                  service.color,
                )}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs text-muted-foreground text-center whitespace-nowrap">{service.label}</span>
            </div>
          )
        })}
        {/* Duplicate set for seamless loop */}
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={`second-${index}`}
              className={cn(
                "flex-shrink-0 flex flex-col items-center space-y-2 transition-all duration-500",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75",
              )}
              style={{ transitionDelay: `${(index + services.length) * 100}ms` }}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-card/80",
                  service.color,
                )}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs text-muted-foreground text-center whitespace-nowrap">{service.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
