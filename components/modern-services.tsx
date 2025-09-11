"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, FileSpreadsheet, Palette, TrendingUp, Users, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: FileSpreadsheet,
    title: "Excel Automation",
    description:
      "Custom Excel solutions, macros, and automated reporting systems to streamline your business processes.",
    features: ["Custom Dashboards", "Automated Reports", "Data Analysis", "VBA Macros"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform your data into actionable insights with advanced analytics and visualization tools.",
    features: ["KPI Tracking", "Performance Metrics", "Trend Analysis", "Forecasting"],
  },
  {
    icon: Palette,
    title: "Digital Design",
    description: "Professional web design and branding solutions that make your business stand out online.",
    features: ["Website Design", "Brand Identity", "UI/UX Design", "Marketing Materials"],
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Strategic consulting and growth planning to take your business to the next level.",
    features: ["Growth Strategy", "Market Analysis", "Process Optimization", "ROI Improvement"],
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Comprehensive training programs to upskill your team on Excel and business tools.",
    features: ["Excel Training", "Best Practices", "Workflow Optimization", "Ongoing Support"],
  },
  {
    icon: Zap,
    title: "Quick Solutions",
    description: "Fast turnaround solutions for urgent business needs and immediate improvements.",
    features: ["Rapid Deployment", "Emergency Support", "Quick Fixes", "Same-day Delivery"],
  },
]

export function ModernServices() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = services.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.2 },
      )
    })

    refs.current.forEach((ref, index) => {
      if (ref && observers[index]) {
        observers[index].observe(ref)
      }
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive business solutions designed to accelerate your growth and streamline your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
  key={index}
  ref={(el) => {
    refs.current[index] = el
  }}
  className={cn(
    "transition-all duration-700 ease-out",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
  )}
  style={{ transitionDelay: `${index * 100}ms` }}
>
                <Card className="h-full card-hover group border-border shadow-lg bg-card">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-card-foreground">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm text-card-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                   
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
