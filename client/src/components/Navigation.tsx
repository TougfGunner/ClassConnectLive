import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "REAL WEDDINGS", path: "/gallery" },
  { name: "PLAN", path: "/plan" },
  { name: "STYLES", path: "/styles" },
  { name: "VENDORS", path: "/vendors" },
  { name: "SUBMIT", path: "/submit" },
  { name: "ADVERTISE", path: "/advertise" },
  { name: "GET YOUR INSTANT MOODBOARD", path: "/moodboard" },
];

const secondaryNavItems = [
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl font-bold tracking-tight hover:text-foreground/80 transition-colors" data-testid="link-logo">
            BALI BLISS
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`font-sans text-xs tracking-widest transition-colors ${
                  location === item.path
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.name}
              </Link>
            ))}
            <span className="text-muted-foreground/30">|</span>
            {secondaryNavItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`font-sans text-xs tracking-widest transition-colors ${
                  location === item.path
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover-elevate rounded-sm"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 space-y-4">
            <div className="space-y-3 pb-4 border-b border-border/30">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-sans text-sm tracking-wide py-2 transition-colors ${
                    location === item.path
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="space-y-3 pt-2">
              {secondaryNavItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-sans text-sm tracking-wide py-2 transition-colors ${
                    location === item.path
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
