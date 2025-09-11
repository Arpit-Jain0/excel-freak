"use client"

import type React from "react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Instagram, MessageCircle } from "lucide-react"

export function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    toast({ title: "Message sent", description: "We'll get back to you shortly." })
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="bg-white">
      <footer className="relative bg-black text-gray-200 px-6 py-8 md:px-20 overflow-hidden">
        {/* Big background text */}
        <h2 className="text-[20vw] md:text-[15vw] font-bold leading-none whitespace-nowrap select-none pointer-events-none bg-gradient-to-r from-gray-600 to-transparent bg-clip-text text-transparent">
          Let's talk
        </h2>

        {/* Foreground content */}
        <div className="relative z-10 max-w-6xl mx-auto grid gap-6 md:grid-cols-2 items-start">
          {/* Contact (left side content if needed) */}
        </div>

        {/* Navigation + Socials */}
        <div className="flex flex-col md:items-end gap-4">
          <div className="flex gap-6 text-base md:text-lg">
            {/* Mail */}
            <a
              href="mailto:excelfreak.solution@gmail.com"
              className="inline-flex items-center text-gray-300 hover:text-white transition"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Send email to excelfreak.solution@gmail.com</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/e.x.c.e.l_f.r.e.a.k/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-white transition"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Visit Instagram profile</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917989268494" // Replace with your WhatsApp number
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-white transition"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="sr-only">Chat on WhatsApp</span>
            </a>

            {/* Phone Call */}
            <a
              href="tel:+917989268494" // Replace with your phone number
              className="inline-flex items-center text-gray-300 hover:text-white transition"
            >
              <Phone className="w-6 h-6" />
              <span className="sr-only">Call us</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Excel Freak. All rights reserved.
        </div>
      </footer>
    </section>
  )
}
