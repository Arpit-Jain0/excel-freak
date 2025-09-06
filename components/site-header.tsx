"use client"

import type React from "react"

import { useCallback } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const onNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b bg-white backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="font-semibold tracking-tight text-primary">
          Excel Freak
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href)}
              className="text-sm text-neutral-700 transition-colors hover:text-primary font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button
            onClick={() => {
              const el = document.querySelector("#contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-primary text-primary-foreground transition-transform duration-200 hover:scale-[1.02] hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
