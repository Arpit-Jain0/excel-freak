"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Reveal } from "@/components/reveal"
import { services } from "@/app/services/page" // Import services from the services page

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone field
    company: "", // Added company field
    product: "", // Changed service to product
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, product: value }) // Changed service to product
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form Data:", formData)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", phone: "", company: "", product: "", message: "" }) // Reset all new fields
      } else {
        alert("Failed to send message.")
      }
    } catch (error) {
      console.error("[v0] Error sending message:", error)
      alert("An error occurred while sending the message.")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Reveal delay={0}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you! Fill out the form below to get in touch with our team.
            </p>
          </Reveal>
        </div>

        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Reveal delay={200}>
              <div>
                <Label htmlFor="name" className="text-card-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-input text-input-foreground border-border"
                />
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div>
                <Label htmlFor="email" className="text-card-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-input text-input-foreground border-border"
                />
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div>
                <Label htmlFor="phone" className="text-card-foreground">
                  Contact Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-input text-input-foreground border-border"
                />
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div>
                <Label htmlFor="company" className="text-card-foreground">
                  Company Name(Optional)
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 bg-input text-input-foreground border-border"
                />
              </div>
            </Reveal>

            <Reveal delay={450}>
              {" "}
              {/* Adjusted delay */}
              <div>
                <Label htmlFor="product" className="text-card-foreground">
                  {" "}
                  {/* Changed service to product */}
                  Product Interest
                </Label>
                <Select onValueChange={handleSelectChange} value={formData.product} required>
                  {" "}
                  {/* Changed service to product */}
                  <SelectTrigger id="product" className="w-full mt-1 bg-input text-input-foreground border-border">
                    {" "}
                    {/* Changed service to product */}
                    <SelectValue placeholder="Select a product" /> {/* Changed placeholder */}
                  </SelectTrigger>
                  <SelectContent className="bg-popover text-popover-foreground border-border">
                    {services.map((service, index) => (
                      <SelectItem key={index} value={service.title}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </Reveal>

            <Reveal delay={500}>
              {" "}
              {/* Adjusted delay */}
              <div>
                <Label htmlFor="message" className="text-card-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-1 bg-input text-input-foreground border-border"
                />
              </div>
            </Reveal>

            <Reveal delay={600}>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </Reveal>
          </form>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
