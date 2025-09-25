"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageModal } from "@/components/image-modal"
import { ExternalLink, BarChart3, Globe, Database } from "lucide-react"
import Image from "next/image"

const portfolioProjects = [
  {
    id: 1,
    title: "Sudha Eye Hospital",
    description: "Eye Hospital Website with backend customer handling ",
    image: "/sudhaeye.jpeg",
    category: "Website",
    technologies: [],
    url: "https://www.sudhaeyehospital.in",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Jain Pandit Hyderabad",
    description: "Information page for a jain pandit in Hyderabad",
    image: "/tirthankar-statue.png",
    category: "Website",
    technologies: [],
    url: "https://www.jainpandithyderabad.in",
    icon: <Globe className="h-5 w-5" />,
  },
  
  
]

const salesDashboards = [
  {
    title: "Tractor Sales Dashboard",
    image: "/sales_dashboard.PNG",
    description: "Comprehensive Sales dashboard",
   
  },
  {
    title: "Agent Performance Dashboard",
    image: "/agent_performance.PNG",
    description: "Dashboard on the Performace of individual agents ",
  },
]

export default function PortfolioPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    imageSrc: string
    imageAlt: string
    title?: string
    description?: string
  }>({
    isOpen: false,
    imageSrc: "",
    imageAlt: "",
    title: "",
    description: "",
  })

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const openImageModal = (imageSrc: string, title: string, description: string) => {
    setModalState({
      isOpen: true,
      imageSrc,
      imageAlt: title,
      title,
      description,
    })
  }

  const closeModal = () => {
    setModalState({
      isOpen: false,
      imageSrc: "",
      imageAlt: "",
      title: "",
      description: "",
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of projects showcasing innovative solutions across websites, dashboards, and
            business applications.
          </p>
        </div>

        {/* Website Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Website Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-card border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => handleProjectClick(project.url)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {project.icon}
                    <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProjectClick(project.url)
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sales Dashboards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Sales Dashboards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salesDashboards.map((dashboard, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                onClick={() => openImageModal(dashboard.image, dashboard.title, dashboard.description)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={dashboard.image || "/placeholder.svg"}
                    alt={dashboard.title}
                    width={350}
                    height={250}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{dashboard.title}</h3>
                  <p className="text-sm text-muted-foreground">{dashboard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how we can create a custom solution that meets your specific business needs and drives
            results.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started Today
          </Button>
        </div>
      </div>

      <SiteFooter />

      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        imageSrc={modalState.imageSrc}
        imageAlt={modalState.imageAlt}
        title={modalState.title}
        description={modalState.description}
      />
    </main>
  )
}
