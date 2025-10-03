"use client"

import type React from "react"

import { useRef } from "react"
import { Button } from "@/components/ui/button"

type LogoUploadProps = {
  onLogoUpload: (logoUrl: string | undefined) => void
  currentLogo?: string
}

export function LogoUpload({ onLogoUpload, currentLogo }: LogoUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null)

  const handlePick = () => fileRef.current?.click()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      onLogoUpload(undefined)
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      onLogoUpload(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="flex items-center gap-3">
      <Button type="button" variant="outline" onClick={handlePick}>
        Upload Logo
      </Button>
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleChange} />
      {currentLogo ? (
        <img
          src={currentLogo || "/placeholder.svg"}
          alt="Uploaded logo preview"
          className="h-10 w-10 rounded border border-border object-cover"
        />
      ) : (
        <span className="text-sm text-muted-foreground">No logo selected</span>
      )}
    </div>
  )
}
