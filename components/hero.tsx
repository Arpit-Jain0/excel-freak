"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MediaMarquee() {
  const media = [
    "/poster-design-mockup-minimal-business.jpg",
    "/business-card-branding-mockup.jpg",
    "/website-homepage-mockup-for-small-business.jpg",
    "/brand-guidelines-style-guide.jpg",
  ]

  return (
    <div className="relative overflow-hidden w-full mt-10">
      <div className="marquee-track flex w-max animate-marquee space-x-6 hover:pause">
        {[...media, ...media].map((src, idx) => (
          <Image
            key={idx}
            src={src || "/placeholder.svg"}
            alt={`Business showcase ${idx + 1}`}
            width={300}
            height={192}
            className="h-48 w-auto rounded-lg shadow-md object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `/placeholder.svg?height=192&width=300&query=business showcase ${idx + 1}`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[600px]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/business-card-branding-mockup.jpg"
          alt="Modern office setup with business team collaboration"
          fill
          className="object-cover w-full"
          priority
          sizes="100vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/modern-office-collaboration.png"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Empowering Small Businesses to Grow, Thrive and Succeed
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-white/90 sm:text-lg">
            Your one stop solution for business management, Creative Growth Strategies and Essential support services
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button
              size="lg"
              className="bg-amber-500 text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-amber-600"
              onClick={() => {
                const phoneNumber = "917989268494"
                const message = "Hi! I came across your website and I'm interested in your services."
                const encodedMessage = encodeURIComponent(message)
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
                window.open(whatsappURL, "_blank")
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
