import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { Reveal } from "@/components/reveal"
import { MediaMarquee } from "@/components/hero"
import { PortfolioCarousel } from "@/components/portfolio-carousel"
import Image from "next/image"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />

      <section id="about" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold text-neutral-900 sm:text-4xl">About Us</h2>
            <p className="mt-3 max-w-3xl text-neutral-900">
              At Excel Freak, our mission is to empower small businesses with modern, practical solutions—combining
              business development, Excel-driven financial reporting, and digital design to drive growth. We focus on
              clarity, speed, and results so you can focus on what matters most: your customers.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <MediaMarquee />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 overflow-hidden rounded-lg">
              <Image
                src="/poster-design-mockup-minimal-business.jpg"
                alt="Excel Freak team collaborating"
                width={800}
                height={400}
                className="h-auto w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/professional-team-collaboration.jpg"
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ServicesGrid />
      <PortfolioCarousel />
      <WhyChooseUs />
      <Contact />
    </main>
  )
}
