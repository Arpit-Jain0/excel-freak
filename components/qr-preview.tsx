"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import type { QRConfig } from "@/components/qr-generator"

interface QRPreviewProps {
  config: QRConfig
  canvasRef: React.RefObject<HTMLCanvasElement>
}

export function QRPreview({ config, canvasRef }: QRPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      generateQRCode()
    }
  }, [config, isMounted])

  const generateQRCode = async () => {
    if (!canvasRef.current || !isMounted) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    try {
      console.log("[v0] Generating QR code with colors:", {
        foreground: config.foregroundColor,
        background: config.backgroundColor,
        data: config.data,
      })

      let QRCode
      try {
        QRCode = (await import("qrcode")).default
      } catch (importError) {
        console.error("[v0] Failed to import qrcode library:", importError)
        throw new Error("QR code library not available")
      }

      canvas.width = config.size + config.margin * 2
      canvas.height = config.size + config.margin * 2

      ctx.fillStyle = config.backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const qrOptions = {
        errorCorrectionLevel: config.errorCorrection,
        type: "image/png" as const,
        quality: 0.92,
        margin: 0,
        color: {
          dark: config.foregroundColor || "#000000",
          light: config.backgroundColor || "#ffffff",
        },
        width: config.size,
      }

      console.log("[v0] QR options:", qrOptions)

      const qrDataUrl = await QRCode.toDataURL(config.data || "https://example.com", qrOptions)

      const qrImage = new Image()
      qrImage.crossOrigin = "anonymous"
      qrImage.onload = () => {
        console.log("[v0] QR image loaded successfully")

        ctx.save()

        if (config.shape === "circle") {
          ctx.beginPath()
          ctx.arc(canvas.width / 2, canvas.height / 2, config.size / 2, 0, 2 * Math.PI)
          ctx.clip()
        } else if (config.shape === "rounded") {
          drawRoundedRect(ctx, config.margin, config.margin, config.size, config.size, config.borderRadius)
          ctx.clip()
        }

        ctx.drawImage(qrImage, config.margin, config.margin, config.size, config.size)

        ctx.restore()

        if (config.logo) {
          const logoImg = new Image()
          logoImg.crossOrigin = "anonymous"
          logoImg.onload = () => {
            const logoSize = config.logoSize
            let logoX, logoY

            switch (config.logoPosition) {
              case "center":
                logoX = (canvas.width - logoSize) / 2
                logoY = (canvas.height - logoSize) / 2
                break
              case "top-left":
                logoX = config.margin + 10
                logoY = config.margin + 10
                break
              case "top-right":
                logoX = canvas.width - config.margin - logoSize - 10
                logoY = config.margin + 10
                break
              case "bottom-left":
                logoX = config.margin + 10
                logoY = canvas.height - config.margin - logoSize - 10
                break
              case "bottom-right":
                logoX = canvas.width - config.margin - logoSize - 10
                logoY = canvas.height - config.margin - logoSize - 10
                break
              default:
                logoX = (canvas.width - logoSize) / 2
                logoY = (canvas.height - logoSize) / 2
            }

            const padding = 8
            ctx.fillStyle = config.backgroundColor
            if (config.shape === "circle") {
              ctx.beginPath()
              ctx.arc(logoX + logoSize / 2, logoY + logoSize / 2, (logoSize + padding) / 2, 0, 2 * Math.PI)
              ctx.fill()
            } else {
              ctx.fillRect(logoX - padding / 2, logoY - padding / 2, logoSize + padding, logoSize + padding)
            }

            ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize)
          }
          logoImg.onerror = () => {
            console.error("[v0] Failed to load logo image")
          }
          logoImg.src = config.logo
        }
      }
      qrImage.onerror = () => {
        console.error("[v0] Failed to load QR image")
        drawErrorMessage(ctx, canvas)
      }
      qrImage.src = qrDataUrl
    } catch (error) {
      console.error("[v0] Error generating QR code:", error)
      drawErrorMessage(ctx, canvas)
    }
  }

  const drawRoundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) => {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
  }

  const drawErrorMessage = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.fillStyle = config.backgroundColor || "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#ef4444"
    ctx.font = "16px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("QR Generation Error", canvas.width / 2, canvas.height / 2)
    ctx.fillText("Check console for details", canvas.width / 2, canvas.height / 2 + 20)
  }

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Loading QR Generator...</span>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="flex justify-center items-center p-8">
      <canvas
        ref={canvasRef}
        className="border border-border rounded-lg shadow-lg max-w-full h-auto"
        style={{
          maxWidth: "400px",
        }}
      />
    </div>
  )
}
