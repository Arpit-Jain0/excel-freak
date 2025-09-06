"use client"

import type React from "react"

import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SimpleCarousel({
  items,
  auto = true,
  interval = 3500,
  itemClassName = "",
  ariaLabel,
}: {
  items: React.ReactNode[]
  auto?: boolean
  interval?: number
  itemClassName?: string
  ariaLabel?: string
}) {
  const [index, setIndex] = useState(0)
  const len = items.length
  const timer = useRef<number | null>(null)

  const next = () => setIndex((i) => (i + 1) % len)
  const prev = () => setIndex((i) => (i - 1 + len) % len)

  useEffect(() => {
    if (!auto || len <= 1) return

    const startTimer = () => {
      if (timer.current) window.clearInterval(timer.current)
      timer.current = window.setInterval(next, interval)
    }

    startTimer()

    return () => {
      if (timer.current) {
        window.clearInterval(timer.current)
        timer.current = null
      }
    }
  }, [auto, interval, len])

  const slides = useMemo(
    () =>
      items.map((item, i) => (
        <div
          key={i}
          className={[
            "shrink-0 grow-0 basis-full transition-all duration-500 ease-in-out",
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-95",
            itemClassName,
          ].join(" ")}
          aria-hidden={i !== index}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${i + 1} of ${len}`}
        >
          {item}
        </div>
      )),
    [items, index, len, itemClassName],
  )

  return (
    <div className="relative" aria-roledescription="carousel" aria-label={ariaLabel}>
      <div className="relative flex w-full overflow-hidden">{slides}</div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={prev}
          className="pointer-events-auto bg-white/90 hover:bg-white transition-all duration-200 hover:scale-105"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={next}
          className="pointer-events-auto bg-white/90 hover:bg-white transition-all duration-200 hover:scale-105"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {Array.from({ length: len }).map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={[
              "h-1.5 w-4 rounded-full transition-all duration-300 ease-in-out",
              i === index ? "bg-blue-600 scale-110" : "bg-neutral-300 hover:bg-neutral-400 hover:scale-105",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  )
}
