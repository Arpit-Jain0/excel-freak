"use client"

import type React from "react"

import { useState } from "react"

type ColorPickerProps = {
  color: string
  onChange: (color: string) => void
}

export function ColorPicker({ color, onChange }: ColorPickerProps) {
  const [value, setValue] = useState(color || "#000000")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value
    setValue(next)
    onChange(next)
  }

  return (
    <div className="flex items-center gap-3">
      <input
        type="color"
        aria-label="Pick color"
        value={value}
        onChange={handleChange}
        className="h-8 w-8 rounded border border-border cursor-pointer"
      />
      <input
        type="text"
        aria-label="Color hex"
        value={value}
        onChange={handleChange}
        className="h-8 w-28 rounded border border-input bg-background px-2 text-sm"
      />
    </div>
  )
}
