"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  title?: string
  description?: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt, title, description }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative z-10 max-w-7xl max-h-[90vh] mx-4">
        {/* Close Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute -top-12 right-0 bg-white/10 border-white/20 text-white hover:bg-white/20 z-20"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Image Container */}
        <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain"
            priority
          />

          {/* Image Info */}
          {(title || description) && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              {title && <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>}
              {description && <p className="text-white/90 text-sm">{description}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
