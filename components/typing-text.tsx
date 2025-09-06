"use client"

import { useEffect, useState } from "react"

export function TypingText({ text, speed = 30, className = "" }: { text: string; speed?: number; className?: string }) {
  const [display, setDisplay] = useState("")
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(i))
      i++
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return (
    <span className={className}>
      {display}
      <span className="ml-0.5 inline-block w-px animate-pulse bg-neutral-900 align-middle" aria-hidden />
    </span>
  )
}
