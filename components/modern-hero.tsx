"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function ModernHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(33,115,70,0.3)_1px,_transparent_0)] bg-[length:40px_40px]" />

    </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Business Growth Solutions
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight">
                Transform Your
                <span className="block text-white">Business with</span>
                <span className="block"> Excel Freak</span>
              </h1>
            </div>

            <p
              className={cn(
                "text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 ease-out delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              Empowering small businesses with modern solutions—combining business development, Excel-driven financial
              reporting, and digital design to accelerate your growth.
            </p>

            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-400",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <Button size="lg" className="group"
                 onClick={() => {
                const phoneNumber = "917989268494";
                const message = "Hi! I came across your website and I'm interested in your services.";
                const encodedMessage = encodeURIComponent(message);
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                window.open(whatsappURL, "_blank");
              }}>
            
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
            </div>
                      </div>

          {/* Hero Image */}
          <div
            className={cn(
              "relative transition-all duration-1200 ease-out delay-300",
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95",
            )}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-black/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-balck rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Excel Freak Business Dashboard"
                  width={100}
                  height={150}
                  className="w-auto h-auto mx-auto"
                 
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">📊</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl">💼</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
