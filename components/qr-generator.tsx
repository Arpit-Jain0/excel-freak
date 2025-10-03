"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Download, Square, Circle, UserRoundSearch as RoundedRect } from "lucide-react"
import { ColorPicker } from "@/components/color-picker"
import { LogoUpload } from "@/components/logo-upload"
import { QRPreview } from "@/components/qr-preview"

export interface QRConfig {
  data: string
  type: "url" | "text" | "whatsapp" | "email" | "wifi"
  foregroundColor: string
  backgroundColor: string
  size: number
  errorCorrection: "L" | "M" | "Q" | "H"
  shape: "square" | "circle" | "rounded"
  logo?: string
  logoSize: number
  logoPosition: "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"
  borderRadius: number
  margin: number
}

export function QRGenerator() {
  const [config, setConfig] = useState<QRConfig>({
    data: "https://example.com",
    type: "url",
    foregroundColor: "#000000",
    backgroundColor: "#ffffff",
    size: 300,
    errorCorrection: "M",
    shape: "square",
    logoSize: 60,
    logoPosition: "center",
    borderRadius: 0,
    margin: 20,
  })

  const [activeTab, setActiveTab] = useState("content")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const updateConfig = (updates: Partial<QRConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }))
  }

  const generateWhatsAppData = (phone: string, message = "") => {
    const cleanPhone = phone.replace(/\D/g, "") // Remove non-digits
    return `https://wa.me/${cleanPhone}${message ? `?text=${encodeURIComponent(message)}` : ""}`
  }

  const generateEmailData = (email: string, subject = "", body = "") => {
    return `mailto:${email}${subject || body ? "?" : ""}${subject ? `subject=${encodeURIComponent(subject)}` : ""}${subject && body ? "&" : ""}${body ? `body=${encodeURIComponent(body)}` : ""}`
  }

  const generateWiFiData = (ssid: string, password: string, security = "WPA") => {
    return `WIFI:T:${security};S:${ssid};P:${password};;`
  }

  const [formInputs, setFormInputs] = useState({
    whatsappPhone: "",
    whatsappMessage: "",
    emailAddress: "",
    emailSubject: "",
    wifiSSID: "",
    wifiPassword: "",
  })

  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement("a")
      link.download = `qr-code-${Date.now()}.png`
      link.href = canvasRef.current.toDataURL()
      link.click()
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left Sidebar - Controls */}
      <div className="lg:col-span-1 space-y-6">
        <Card className="bg-sidebar border-sidebar-border">
          <CardHeader>
            <CardTitle className="text-sidebar-foreground">QR Code Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="style">Style</TabsTrigger>
                <TabsTrigger value="logo">Logo</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>QR Code Type</Label>
                  <Select
                    value={config.type}
                    onValueChange={(value: QRConfig["type"]) => updateConfig({ type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="url">Website URL</SelectItem>
                      <SelectItem value="text">Plain Text</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="wifi">WiFi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {config.type === "url" && (
                  <div className="space-y-2">
                    <Label>Website URL</Label>
                    <Input
                      placeholder="https://example.com"
                      value={config.data}
                      onChange={(e) => updateConfig({ data: e.target.value })}
                    />
                  </div>
                )}

                {config.type === "text" && (
                  <div className="space-y-2">
                    <Label>Text Content</Label>
                    <Textarea
                      placeholder="Enter your text here..."
                      value={config.data}
                      onChange={(e) => updateConfig({ data: e.target.value })}
                    />
                  </div>
                )}

                {config.type === "whatsapp" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Phone Number</Label>
                      <Input
                        placeholder="1234567890"
                        value={formInputs.whatsappPhone}
                        onChange={(e) => {
                          const phone = e.target.value
                          setFormInputs((prev) => ({ ...prev, whatsappPhone: phone }))
                          updateConfig({ data: generateWhatsAppData(phone, formInputs.whatsappMessage) })
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Pre-filled Message (Optional)</Label>
                      <Textarea
                        placeholder="Hello! I'm interested in..."
                        value={formInputs.whatsappMessage}
                        onChange={(e) => {
                          const message = e.target.value
                          setFormInputs((prev) => ({ ...prev, whatsappMessage: message }))
                          updateConfig({ data: generateWhatsAppData(formInputs.whatsappPhone, message) })
                        }}
                      />
                    </div>
                  </div>
                )}

                {config.type === "email" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <Input
                        placeholder="contact@example.com"
                        value={formInputs.emailAddress}
                        onChange={(e) => {
                          const email = e.target.value
                          setFormInputs((prev) => ({ ...prev, emailAddress: email }))
                          updateConfig({ data: generateEmailData(email, formInputs.emailSubject) })
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Subject (Optional)</Label>
                      <Input
                        placeholder="Email subject"
                        value={formInputs.emailSubject}
                        onChange={(e) => {
                          const subject = e.target.value
                          setFormInputs((prev) => ({ ...prev, emailSubject: subject }))
                          updateConfig({ data: generateEmailData(formInputs.emailAddress, subject) })
                        }}
                      />
                    </div>
                  </div>
                )}

                {config.type === "wifi" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Network Name (SSID)</Label>
                      <Input
                        placeholder="MyWiFiNetwork"
                        value={formInputs.wifiSSID}
                        onChange={(e) => {
                          const ssid = e.target.value
                          setFormInputs((prev) => ({ ...prev, wifiSSID: ssid }))
                          updateConfig({ data: generateWiFiData(ssid, formInputs.wifiPassword, "WPA") })
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Password</Label>
                      <Input
                        type="password"
                        placeholder="WiFi password"
                        value={formInputs.wifiPassword}
                        onChange={(e) => {
                          const password = e.target.value
                          setFormInputs((prev) => ({ ...prev, wifiPassword: password }))
                          updateConfig({ data: generateWiFiData(formInputs.wifiSSID, password, "WPA") })
                        }}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Error Correction Level</Label>
                  <Select
                    value={config.errorCorrection}
                    onValueChange={(value: QRConfig["errorCorrection"]) => updateConfig({ errorCorrection: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="L">Low (7%)</SelectItem>
                      <SelectItem value="M">Medium (15%)</SelectItem>
                      <SelectItem value="Q">Quartile (25%)</SelectItem>
                      <SelectItem value="H">High (30%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              <TabsContent value="style" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>QR Code Shape</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant={config.shape === "square" ? "default" : "outline"}
                      size="sm"
                      onClick={() => updateConfig({ shape: "square" })}
                      className="flex flex-col items-center gap-1 h-auto py-2"
                    >
                      <Square className="w-4 h-4" />
                      <span className="text-xs">Square</span>
                    </Button>
                    <Button
                      variant={config.shape === "rounded" ? "default" : "outline"}
                      size="sm"
                      onClick={() => updateConfig({ shape: "rounded" })}
                      className="flex flex-col items-center gap-1 h-auto py-2"
                    >
                      <RoundedRect className="w-4 h-4" />
                      <span className="text-xs">Rounded</span>
                    </Button>
                    <Button
                      variant={config.shape === "circle" ? "default" : "outline"}
                      size="sm"
                      onClick={() => updateConfig({ shape: "circle" })}
                      className="flex flex-col items-center gap-1 h-auto py-2"
                    >
                      <Circle className="w-4 h-4" />
                      <span className="text-xs">Circle</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Foreground Color</Label>
                  <ColorPicker
                    color={config.foregroundColor}
                    onChange={(color) => updateConfig({ foregroundColor: color })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Background Color</Label>
                  <ColorPicker
                    color={config.backgroundColor}
                    onChange={(color) => updateConfig({ backgroundColor: color })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Size: {config.size}px</Label>
                  <Slider
                    value={[config.size]}
                    onValueChange={([value]) => updateConfig({ size: value })}
                    min={200}
                    max={800}
                    step={50}
                  />
                </div>

                {config.shape === "rounded" && (
                  <div className="space-y-2">
                    <Label>Border Radius: {config.borderRadius}px</Label>
                    <Slider
                      value={[config.borderRadius]}
                      onValueChange={([value]) => updateConfig({ borderRadius: value })}
                      min={0}
                      max={50}
                      step={5}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Margin: {config.margin}px</Label>
                  <Slider
                    value={[config.margin]}
                    onValueChange={([value]) => updateConfig({ margin: value })}
                    min={0}
                    max={50}
                    step={5}
                  />
                </div>
              </TabsContent>

              <TabsContent value="logo" className="space-y-4 mt-4">
                <LogoUpload onLogoUpload={(logoUrl) => updateConfig({ logo: logoUrl })} currentLogo={config.logo} />

                {config.logo && (
                  <>
                    <div className="space-y-2">
                      <Label>Logo Size: {config.logoSize}px</Label>
                      <Slider
                        value={[config.logoSize]}
                        onValueChange={([value]) => updateConfig({ logoSize: value })}
                        min={20}
                        max={120}
                        step={10}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Logo Position</Label>
                      <Select
                        value={config.logoPosition}
                        onValueChange={(value: QRConfig["logoPosition"]) => updateConfig({ logoPosition: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="center">Center</SelectItem>
                          <SelectItem value="top-left">Top Left</SelectItem>
                          <SelectItem value="top-right">Top Right</SelectItem>
                          <SelectItem value="bottom-left">Bottom Left</SelectItem>
                          <SelectItem value="bottom-right">Bottom Right</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Center - QR Code Preview */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>QR Code Preview</span>
              <Button onClick={handleDownload} className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <QRPreview config={config} canvasRef={canvasRef} />
          </CardContent>
        </Card>
      </div>

      {/* Right Sidebar - Additional Options */}
      <div className="lg:col-span-1">
        <Card className="bg-sidebar border-sidebar-border">
          <CardHeader>
            <CardTitle className="text-sidebar-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={() =>
                updateConfig({
                  foregroundColor: "#059669",
                  backgroundColor: "#ffffff",
                  shape: "rounded",
                  borderRadius: 15,
                })
              }
              variant="outline"
              className="w-full"
            >
              Apply Brand Colors
            </Button>

            <Button
              onClick={() =>
                updateConfig({
                  foregroundColor: "#000000",
                  backgroundColor: "#ffffff",
                  shape: "square",
                  borderRadius: 0,
                  logo: undefined,
                })
              }
              variant="outline"
              className="w-full"
            >
              Reset to Default
            </Button>

            <div className="pt-4 border-t border-sidebar-border">
              <h4 className="font-medium text-sidebar-foreground mb-2">Color Presets</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "Classic", fg: "#000000", bg: "#ffffff" },
                  { name: "Emerald", fg: "#059669", bg: "#f0fdf4" },
                  { name: "Blue", fg: "#2563eb", bg: "#eff6ff" },
                  { name: "Purple", fg: "#7c3aed", bg: "#faf5ff" },
                ].map((preset) => (
                  <Button
                    key={preset.name}
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      updateConfig({
                        foregroundColor: preset.fg,
                        backgroundColor: preset.bg,
                      })
                    }
                    className="text-xs"
                  >
                    {preset.name}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
