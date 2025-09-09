import { SiteHeader } from "@/components/site-header"
import { ModernHero } from "@/components/modern-hero"
import { ModernServices } from "@/components/modern-services"
import { ModernSection } from "@/components/modern-section"
import { AlternatingSection } from "@/components/alternating-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />
      <ModernHero />

      {/* About Section - Alternating Layout */}
      <ModernSection variant="default" animate="fade">
        <AlternatingSection
          title="About Excel Freak"
          description="We empower small businesses with modern, practical solutions that drive real growth. Our expertise spans business development, Excel-driven financial reporting, and cutting-edge digital design."
          imageSrc="/team-collaboration-modern.jpg"
          imageAlt="Excel Freak team collaboration"
          imagePosition="left"
          features={[
            "10+ years of business expertise",
            "500+ successful projects delivered",
            "Specialized in small business growth",
            "End-to-end solution provider",
          ]}
        />
      </ModernSection>

      <ModernServices />

      {/* Process Section - Alternating Layout */}
      <ModernSection variant="alternate" animate="slide-right">
        <AlternatingSection
          title="Our Proven Process"
          description="We follow a systematic approach to ensure your business transformation is smooth, effective, and delivers measurable results from day one."
          imageSrc="/business-process-workflow.jpg"
          imageAlt="Business process workflow"
          imagePosition="right"
          features={[
            "Discovery & Analysis Phase",
            "Custom Solution Design",
            "Implementation & Testing",
            "Training & Ongoing Support",
          ]}
        />
      </ModernSection>

      {/* Technology Section - Alternating Layout */}
      <ModernSection variant="default" animate="slide-left">
        <AlternatingSection
          title="Cutting-Edge Technology"
          description="We leverage the latest tools and technologies to build solutions that are not just functional today, but scalable for tomorrow's challenges."
          imageSrc="/technology-dashboard.jpg"
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

      {/* Results Section - Alternating Layout */}
      <ModernSection variant="alternate" animate="slide-right">
        <AlternatingSection
          title="Proven Results"
          description="Our clients see real, measurable improvements in their business operations, efficiency, and bottom line within the first 30 days."
          imageSrc="/business-growth-results.jpg"
          imageAlt="Business growth and results"
          imagePosition="right"
          features={[
            "Average 40% efficiency improvement",
            "95% client retention rate",
            "ROI visible within 30 days",
            "24/7 ongoing support included",
          ]}
        />
      </ModernSection>

      <Contact />
    </main>
  )
}
