"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QRGenerator } from "@/components/qr-generator"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (password === "efadmin@1996") {
      setIsAuthenticated(true)
      localStorage.setItem("adminAuth", "true")
    } else {
      alert("Incorrect password!")
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-yellow-400">Admin Login</CardTitle>
            <CardDescription className="text-gray-400">Enter password to access admin panel</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
              Login
            </Button>
           
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-yellow-400">Excel Freak Admin</h1>
          <Button
            onClick={() => {
              setIsAuthenticated(false)
              localStorage.removeItem("adminAuth")
            }}
            variant="outline"
            className="border-zinc-700 text-white hover:bg-zinc-800"
          >
            Logout
          </Button>
        </div>

        <Tabs defaultValue="qr" className="space-y-6">
          <TabsList className="w-full justify-start gap-2 bg-zinc-900 border border-zinc-800">
            <TabsTrigger value="projects" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
              Our Projects
            </TabsTrigger>
            <TabsTrigger value="qr" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
              QR Code Generator
            </TabsTrigger>
            <TabsTrigger value="whatsapp" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
              WhatsApp Message Sender
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">Our Projects</CardTitle>
                <CardDescription className="text-gray-400">This section is empty for now.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-6 text-sm text-gray-300">Nothing to show yet. Come back soon!</div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qr">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">QR Code Generator</CardTitle>
                <CardDescription className="text-gray-400">Customize, preview, and download QR codes.</CardDescription>
              </CardHeader>
              <CardContent>
                <QRGenerator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="whatsapp">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">WhatsApp Message Sender</CardTitle>
                <CardDescription className="text-gray-400">This section is empty for now.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-6 text-sm text-gray-300">Nothing to show yet. Come back soon!</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
