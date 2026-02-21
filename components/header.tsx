'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/80 border-b border-border/40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-shadow">
            B
          </div>
          <span className="text-sm font-semibold text-foreground hidden sm:inline">Brain & Spine</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Services', id: 'services' },
            { label: 'Why Choose Us', id: 'why-choose' },
            { label: 'Therapists', id: 'therapists' },
            { label: 'Testimonials', id: 'testimonials' },
            { label: 'FAQ', id: 'faq' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => scrollToSection('appointment')}
            className="hidden sm:inline-flex bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-white rounded-full"
          >
            Book Appointment
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background animate-in slide-in-from-top-2">
          <div className="px-4 py-4 space-y-3">
            {[
              { label: 'Services', id: 'services' },
              { label: 'Why Choose Us', id: 'why-choose' },
              { label: 'Therapists', id: 'therapists' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors hover:bg-muted rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('appointment')}
              className="w-full mt-4 bg-gradient-to-r from-primary to-accent text-white rounded-full"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
