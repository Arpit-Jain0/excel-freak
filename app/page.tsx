import { SiteHeader } from "@/components/site-header"
import { ModernHero } from "@/components/modern-hero"
import { ModernServices } from "@/components/modern-services"
import { ModernSection } from "@/components/modern-section"
import { AlternatingSection } from "@/components/alternating-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { SlidingServiceIcons } from "@/components/sliding-service-icons"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { Reveal } from "@/components/reveal" // Import Reveal component

export default function Page() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />
      <Reveal delay={0}>
        {" "}
        {/* Wrapped ModernHero with Reveal */}
        <ModernHero />
      </Reveal>

      {/* About Section - Alternating Layout */}
      <ModernSection variant="default" animate="fade">
        <AlternatingSection
          title="About Excel Freak"
          description="We create customized products that fit our customers' unique needs. From smart QR code designs to modern websites, interactive Financial dashboards, and seamless sales management systems, we deliver solutions that make businesses run smoother."
          imageSrc="/Capture.PNG"
          imageAlt="Excel Freak business solutions dashboard"
          imagePosition="left"
          features={[
            "Wide range of digital solutions",
            "100% tailored to client requirements",
            "From design to deployment, all in one place",
            "Trusted by businesses for innovation and reliability",
          ]}
        />
        <div className="mt-6">
          <Reveal delay={100}>
            {" "}
            {/* Wrapped SlidingServiceIcons with Reveal */}
            <SlidingServiceIcons />
          </Reveal>
        </div>
      </ModernSection>

      <Reveal delay={200}>
        {" "}
        {/* Wrapped ModernServices with Reveal */}
        <ModernServices />
      </Reveal>

      <Reveal delay={300}>
        {" "}
        {/* Wrapped PortfolioPreview with Reveal */}
        <PortfolioPreview />
      </Reveal>

      {/* Technology Section - Alternating Layout */}
      <ModernSection variant="default" animate="slide-left">
        <AlternatingSection
          title="Cutting-Edge Technology"
          description="We leverage the latest tools and technologies to build solutions that are not just functional today, but scalable for tomorrow's challenges."
          imageSrc="/vector.PNG"
          imageAlt="Advanced technology dashboard"
          imagePosition="left"
          features={[
            "Advanced Excel & Power BI",
            "Cloud-based Solutions",
            "Mobile-responsive Design",
            "Integration Capabilities",
          ]}
        />
      </ModernSection>

      <Reveal delay={400}>
        {" "}
        {/* Wrapped WhyChooseUs with Reveal */}
        <WhyChooseUs />
      </Reveal>

      <Reveal delay={500}>
        {" "}
        {/* Wrapped Contact with Reveal */}
        <Contact />
      </Reveal>
    </main>
  )
}
