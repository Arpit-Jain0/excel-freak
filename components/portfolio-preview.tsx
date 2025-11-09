"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Sudha Eye Hospital",
    description: "Eye Hospital Website with backend customer handling ",
    image: "/sudhaeye.jpeg",
    url: "https://www.sudhaeyehospital.in",
  },
  {
    title: "Jain Pandit Hyderabad",
    description: "Information page for a jain pandit in Hyderabad",
    image: "/tirthankar-statue.png",
    url: "https://www.jainpandithyderabad.in",
  },
  {
    title: "Atlas GreenTrade",
    description: "Recycling and chemical trading industry",
    image: "/logo 2.png",
    url: "https://www.atlasgreen.eu",
  },
  
]

const salesDashboards = [
  {
    title: "Tractor Sales Dashboard",
    image: "/sales_dashboard.png",
  },
  {
    title: "Agent Performance Dashboard",
    image: "/agent_performance.png",
  },
 
]

export function PortfolioPreview() {
  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="portfolio" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest projects showcasing innovative solutions across websites, dashboards, and business
            applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => handleProjectClick(project.url)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-card-foreground mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
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
        </div>

        {/* Sales Dashboards Preview */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Sales Dashboards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salesDashboards.map((dashboard, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={dashboard.image || "/placeholder.svg"}
                    alt={dashboard.title}
                    width={350}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold text-card-foreground">{dashboard.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
