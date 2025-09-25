import { SiteHeader } from "@/components/site-header"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ModernSection } from "@/components/modern-section"

export default function WhyUsPage() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />

      {/* Hero Section */}
      <ModernSection variant="default" animate="fade">
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-yellow-400">Excel Freak</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for businesses seeking digital transformation
          </p>
        </div>
      </ModernSection>

      {/* Why Choose Us Component */}
      <WhyChooseUs />

      {/* Additional Benefits */}
      <ModernSection variant="default" animate="fade">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Additional <span className="text-yellow-400">Benefits</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-zinc-900 rounded-lg">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">24/7</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Round-the-Clock Support</h3>
            <p className="text-gray-300">
              Our dedicated support team is available 24/7 to assist you with any questions or issues.
            </p>
          </div>

          <div className="text-center p-6 bg-zinc-900 rounded-lg">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">∞</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Unlimited Revisions</h3>
            <p className="text-gray-300">We work with you until you're completely satisfied with the final product.</p>
          </div>

          <div className="text-center p-6 bg-zinc-900 rounded-lg">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-300">
              Quick turnaround times without compromising on quality or attention to detail.
            </p>
          </div>
        </div>
      </ModernSection>
    </main>
  )
}
