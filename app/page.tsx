import { SiteHeader } from "@/components/site-header"
import { ModernHero } from "@/components/modern-hero"
import { ModernServices } from "@/components/modern-services"
import { ModernSection } from "@/components/modern-section"
import { AlternatingSection } from "@/components/alternating-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { SlidingServiceIcons } from "@/components/sliding-service-icons"
import { PortfolioPreview } from "@/components/portfolio-preview"

export default function Page() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />
      <ModernHero />

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
          <SlidingServiceIcons />
        </div>
      </ModernSection>

      <ModernServices />

      <PortfolioPreview />

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

      <WhyChooseUs />

      <Contact />
    </main>
  )
}
