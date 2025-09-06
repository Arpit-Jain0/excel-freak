"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Reveal } from "./reveal"
import { Mail, Phone } from "lucide-react"

export function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    toast({ title: "Message sent", description: "We'll get back to you shortly." })
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold text-neutral-900 sm:text-4xl">Let's Talk</h2>
          <p className="mt-2 max-w-2xl text-neutral-700">
            Ready to grow your business? Get in touch and let's discuss how we can help you succeed.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal className="rounded-lg border p-6 bg-card">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                  className="min-h-32"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground transition-transform hover:scale-[1.01] hover:bg-primary/90"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="rounded-lg border p-6 bg-card">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Information</h3>
              <div className="space-y-4 text-neutral-700">
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" aria-hidden />
                  <a
                    href="mailto:excelfreak.solution@gmail.com"
                    className="text-neutral-900 hover:text-primary transition-colors"
                  >
                    excelfreak.solution@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" aria-hidden />
                  <a href="tel:+917989268494" className="text-neutral-900 hover:text-primary transition-colors">
                    +91 79892 68494
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-lg border p-6 bg-card">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/e.x.c.e.l_f.r.e.a.k/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-700 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/yashjain96/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-700 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 text-center">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Excel Freak. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
