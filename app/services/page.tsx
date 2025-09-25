import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, BarChart3, Globe, Database, Smartphone, Zap } from "lucide-react"
import { Reveal } from "@/components/reveal" // Import Reveal component

export const services = [
  {
    icon: <BarChart3 className="h-8 w-8 text-yellow-400" />,
    title: "Excel & Power BI Solutions",
    description:
      "Custom dashboards, automated reports, and data visualization solutions that transform your business data into actionable insights.",
    features: [
      "Interactive Excel Dashboards",
      "Power BI Report Development",
      "Data Automation & Macros",
      "Financial Modeling",
      "KPI Tracking Systems",
    ],
  },
  {
    icon: <Globe className="h-8 w-8 text-yellow-400" />,
    title: "Website Development",
    description:
      "Modern, responsive websites built with cutting-edge technology to establish your digital presence and drive business growth.",
    features: [
      "Responsive Web Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "SEO Optimization",
      "Performance Optimization",
    ],
  },
  {
    icon: <Database className="h-8 w-8 text-yellow-400" />,
    title: "Database Management",
    description:
      "Comprehensive database solutions for efficient data storage, retrieval, and management across your organization.",
    features: [
      "Database Design & Setup",
      "Data Migration Services",
      "Performance Optimization",
      "Backup & Recovery Solutions",
      "Data Security Implementation",
    ],
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    title: "Business Automation",
    description:
      "Streamline your operations with custom automation solutions that reduce manual work and increase efficiency.",
    features: [
      "Workflow Automation",
      "Process Optimization",
      "Integration Solutions",
      "Custom Software Development",
      "System Modernization",
    ],
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-yellow-400" />,
    title: "Consulting & Support",
    description: "Expert guidance and ongoing support to help you make the most of your technology investments.",
    features: [
      "Technology Consulting",
      "System Analysis",
      "Training & Documentation",
      "Ongoing Maintenance",
      "24/7 Technical Support",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business operations and drive growth through
            innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
              <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="text-center bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover how we can help transform your business
            with our comprehensive digital solutions.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Contact Us Today
          </Button>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
