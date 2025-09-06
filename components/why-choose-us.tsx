"use client"

import { Reveal } from "./reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, Layers, Palette, Handshake } from "lucide-react"

const points = [
  {
    title: "Affordable Solutions",
    icon: BadgeCheck,
    desc: "High-impact work at small-business-friendly pricing.",
  },
  {
    title: "Tailored Strategies",
    icon: Layers,
    desc: "Built around your goals, not generic templates.",
  },
  {
    title: "Professional Designs",
    icon: Palette,
    desc: "Clean visuals that build trust and brand equity.",
  },
  {
    title: "End-to-End Support",
    icon: Handshake,
    desc: "From idea to execution, we’re your partner.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold text-neutral-900 sm:text-4xl">Why Choose Us</h2>
          <p className="mt-2 max-w-2xl text-neutral-700">
            Clear value from strategy to design—delivered with care and consistency.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.title} delay={i * 50}>
                <Card className="h-full transition-transform hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" aria-hidden />
                      </span>
                      <CardTitle className="text-base">{p.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
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
