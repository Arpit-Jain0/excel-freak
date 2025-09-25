import { SiteHeader } from "@/components/site-header"
import { ModernSection } from "@/components/modern-section"
import { AlternatingSection } from "@/components/alternating-section"
import { SlidingServiceIcons } from "@/components/sliding-service-icons"

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />

      {/* Hero Section */}
      <ModernSection variant="default" animate="fade">
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-yellow-400">Excel Freak</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming businesses through innovative digital solutions and custom-built applications
          </p>
        </div>
      </ModernSection>

      {/* About Section - Alternating Layout */}
      <ModernSection variant="default" animate="fade">
        <AlternatingSection
          title="Our Story"
          description="We create customized products that fit our customers' unique needs. From smart QR code designs to modern websites, interactive Financial dashboards, and seamless sales management systems, we deliver solutions that make businesses run smoother."
          imageSrc="/Capture.png"
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

      {/* Technology Section */}
      <ModernSection variant="default" animate="slide-left">
        <AlternatingSection
          title="Cutting-Edge Technology"
          description="We leverage the latest tools and technologies to build solutions that are not just functional today, but scalable for tomorrow's challenges."
          imageSrc="/vector.png"
          imageAlt="Advanced technology dashboard"
          imagePosition="right"
          features={[
            "Advanced Excel & Power BI",
            "Cloud-based Solutions",
            "Mobile-responsive Design",
            "Integration Capabilities",
          ]}
        />
      </ModernSection>

      {/* Mission & Vision */}
      <ModernSection variant="default" animate="fade">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg">
              To empower businesses with innovative digital solutions that streamline operations, enhance productivity,
              and drive growth through cutting-edge technology.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg">
              To be the leading provider of custom digital solutions, transforming how businesses operate and succeed in
              the digital age.
            </p>
          </div>
        </div>
      </ModernSection>
    </main>
  )
}
