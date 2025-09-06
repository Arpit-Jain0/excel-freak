"use client"

import { Reveal } from "./reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart3,
  Briefcase,
  Headset,
  FileSpreadsheet,
  MonitorSmartphone,
  Building2,
  Brush,
  Megaphone,
  Sparkles,
  Award as IdCard,
  Landmark,
  Workflow,
} from "lucide-react"

const services = [
  { title: "Small business growth", icon: BarChart3 },
  { title: "Business development services", icon: Briefcase },
  { title: "Business support solutions", icon: Headset },
  { title: "Excel financial reporting", icon: FileSpreadsheet },
  { title: "Website design for small businesses", icon: MonitorSmartphone },
  { title: "Business account setup", icon: Building2 },
  { title: "Poster design services", icon: Brush },
  { title: "Advertisement design", icon: Megaphone },
  { title: "Branding for small businesses", icon: Sparkles },
  { title: "Business cards design", icon: IdCard },
  { title: "Small business consulting", icon: Landmark },
  { title: "Business management services", icon: Workflow },
]

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold text-neutral-900 sm:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-neutral-700">
            Practical, tailored solutions to grow your small business with modern strategy and design.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={i * 40}>
                <Card className="h-full transition-transform hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" aria-hidden />
                      </span>
                      <CardTitle className="text-base">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Professional, reliable, and focused on outcomes. Hover to feel the difference.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
