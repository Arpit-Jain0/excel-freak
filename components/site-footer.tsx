import { Instagram, Facebook, Linkedin } from "lucide-react"

const links = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <nav className="flex items-center gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-blue-600">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="LinkedIn" href="#" className="text-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href="#" className="text-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a aria-label="Facebook" href="#" className="text-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-neutral-500">© 2025 Excel Freak. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
