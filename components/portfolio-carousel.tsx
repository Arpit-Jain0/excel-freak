"use client"

import Image from "next/image"
import { Reveal } from "./reveal"
import { SimpleCarousel } from "./simple-carousel"

const portfolioItems = [
  {
    alt: "Poster design mockup",
    src: "/poster-design-mockup-minimal-business.jpg",
  },
  {
    alt: "Business card branding",
    src: "/business-card-branding-mockup.jpg",
  },
  {
    alt: "Website homepage concept",
    src: "/website-homepage-mockup-for-small-business.jpg",
  },
  {
    alt: "Brand guidelines sample",
    src: "/brand-guidelines-style-guide.jpg",
  },
]

export function PortfolioCarousel() {
  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold text-neutral-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-2 max-w-2xl text-neutral-700">
            Selected work spanning posters, business cards, branding, and website mockups.
          </p>
        </Reveal>

        <div className="mt-8">
          <SimpleCarousel
            ariaLabel="Portfolio showcase"
            items={portfolioItems.map((item) => (
              <div
                key={item.alt}
                className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-neutral-100 shadow-lg"
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(item.alt)}`
                  }}
                />
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  )
}
