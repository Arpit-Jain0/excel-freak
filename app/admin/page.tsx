"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Plus, Users, FolderOpen, Settings } from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "ABC Corp",
      email: "contact@abc.com",
      services: ["Website Development", "Excel Dashboard"],
      status: "Active",
    },
    { id: 2, name: "XYZ Ltd", email: "info@xyz.com", services: ["Power BI Dashboard"], status: "Completed" },
  ])
  const [projects, setProjects] = useState([
    { id: 1, name: "E-commerce Website", client: "ABC Corp", status: "In Progress", url: "https://example.com" },
    { id: 2, name: "Sales Dashboard", client: "XYZ Ltd", status: "Completed", url: "https://dashboard.example.com" },
    { id: 3, name: "Inventory System", client: "DEF Inc", status: "Planning", url: "" },
  ])

  // Website links that float on the right
  const websiteLinks = [
    { name: "Client Portal", url: "https://portal.example.com" },
    { name: "Demo Dashboard", url: "https://demo.example.com" },
    { name: "Template Gallery", url: "https://templates.example.com" },
    { name: "Support Center", url: "https://support.example.com" },
  ]

  const services = [
    "Website Development",
    "Excel Dashboard",
    "Power BI Dashboard",
    "Sales Management System",
    "Inventory Management",
    "Financial Planning Tools",
    "QR Code Solutions",
    "Mobile App Development",
    "Database Design",
    "API Integration",
  ]

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true)
      localStorage.setItem("adminAuth", "true")
    } else {
      alert("Incorrect password!")
    }
  }

  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const selectedServices = services.filter((service) => formData.get(service.replace(/\s+/g, "").toLowerCase()))

    const newCustomer = {
      id: customers.length + 1,
      name: formData.get("customerName") as string,
      email: formData.get("customerEmail") as string,
      services: selectedServices,
      status: "Active",
    }

    setCustomers([...customers, newCustomer])
    alert("Customer added successfully!")
    ;(e.target as HTMLFormElement).reset()
  }

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-yellow-400">Admin Login</CardTitle>
            <CardDescription className="text-gray-400">Enter password to access admin panel</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
              Login
            </Button>
            <p className="text-sm text-gray-500 text-center">Demo password: admin123</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Website Links */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-2">
        {websiteLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-yellow-500 text-black px-3 py-2 rounded-l-lg text-sm font-medium hover:bg-yellow-400 transition-colors shadow-lg"
            title={link.name}
          >
            <ExternalLink size={16} className="inline mr-1" />
            {link.name}
          </a>
        ))}
      </div>

      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-400">Excel Freak Admin Panel</h1>
          <Button
            onClick={() => {
              setIsAuthenticated(false)
              localStorage.removeItem("adminAuth")
            }}
            variant="outline"
            className="border-zinc-700 text-white hover:bg-zinc-800"
          >
            Logout
          </Button>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="bg-zinc-900 border-zinc-800">
            <TabsTrigger value="projects" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
              <FolderOpen className="mr-2 h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="customers" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
              <Users className="mr-2 h-4 w-4" />
              Add Customer
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">All Projects</CardTitle>
                <CardDescription className="text-gray-400">Manage and view all client projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-white">{project.name}</h3>
                        <p className="text-sm text-gray-400">Client: {project.client}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className={project.status === "Completed" ? "bg-green-600" : "bg-yellow-600"}
                        >
                          {project.status}
                        </Badge>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:text-yellow-300"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-yellow-400">Add New Customer</CardTitle>
                  <CardDescription className="text-gray-400">Add customer details and select services</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddCustomer} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Customer Name</label>
                      <Input
                        name="customerName"
                        required
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="Enter customer name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email</label>
                      <Input
                        name="customerEmail"
                        type="email"
                        required
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="Enter email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Services Required</label>
                      <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                        {services.map((service) => (
                          <label key={service} className="flex items-center space-x-2 text-sm">
                            <input
                              type="checkbox"
                              name={service.replace(/\s+/g, "").toLowerCase()}
                              className="rounded border-zinc-700"
                            />
                            <span className="text-gray-300">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Customer
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-yellow-400">Existing Customers</CardTitle>
                  <CardDescription className="text-gray-400">View all registered customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customers.map((customer) => (
                      <div key={customer.id} className="p-4 bg-zinc-800 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-white">{customer.name}</h3>
                          <Badge variant={customer.status === "Active" ? "default" : "secondary"}>
                            {customer.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{customer.email}</p>
                        <div className="flex flex-wrap gap-1">
                          {customer.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">Database Configuration</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure Supabase integration for data storage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-zinc-800 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Required Environment Variables</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      <code className="bg-zinc-700 px-2 py-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code>
                    </p>
                    <p>
                      <code className="bg-zinc-700 px-2 py-1 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-zinc-800 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Database Tables Required</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      • <strong>customers</strong> - Store customer information
                    </p>
                    <p>
                      • <strong>projects</strong> - Track project details
                    </p>
                    <p>
                      • <strong>services</strong> - Manage available services
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
