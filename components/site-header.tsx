"use client"

import React, { useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react" // Make sure to install Lucide or use other icons
import Image from "next/image"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const onNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
       setMobileMenuOpen(false)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <a href="#" className="text-lg font-bold tracking-tight text-yellow-400">
            Excel Freak
          </a>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href)}
              className="text-sm font-medium text-white transition-colors hover:text-yellow-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Get Started Button (Desktop only) */}
        <div className="hidden md:block">
          <Button
            onClick={() => {
              const el = document.querySelector("#contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-yellow-500 text-black transition-transform duration-200 hover:scale-105 hover:bg-yellow-400"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => onNavClick(e, item.href)}
                className="text-sm font-medium text-white transition-colors hover:text-yellow-400"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                const el = document.querySelector("#contact")
                if (el) el.scrollIntoView({ behavior: "smooth" })
                setMobileMenuOpen(false)
              }}
              className="mt-2 bg-yellow-500 text-black hover:bg-yellow-400"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}