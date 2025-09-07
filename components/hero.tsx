"use client"

import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils";


export function MediaMarquee() {
  const media = [
    "1.jpg",
    "22.jpg",
    "1.jpg"
  ]

  return (
    <div className="relative overflow-hidden w-full mt-10">
      <div className="marquee-track flex w-max animate-marquee space-x-6">
        {[...media, ...media].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className="h-48 w-auto rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  )
}


export function Hero() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
       <img
  src={"22.jpg"}
  alt=""
  className="object-cover w-full rounded-lg shadow-lg"
        />
       
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-balance text-5xl font-semibold leading-tight text-white sm:text-5xl">
         Empowering Small Businesses to Grow, Thrive and Succeed
         
         </h1>
          <p className="mt-4 max-w-2xl text-pretty text-white-700 sm:text-lg">
            Your one stop solution for business management, Creative Growth Strategies and Essesntial support services
          </p>
          <div className="mt-8 flex items-center gap-4">
<Button
  size="lg"
  className="bg-primary text-primary-foreground transition-transform duration-200 hover:scale-[1.02] hover:bg-primary/90"
  onClick={() => {
    const phoneNumber = "917989268494" // change to your WhatsApp number
    const message = "Hi! I came across your website and I'm interested in your services."
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappURL, "_blank")
  }}
>
  Get in Touch
</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
