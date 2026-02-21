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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo - Matches Brand Guidelines */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#F58220] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-all duration-300">
            B
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-slate-900 dark:text-white leading-tight">Brain & Spine</span>
            <span className="text-[10px] uppercase tracking-widest text-[#F58220] font-bold">Physio Clinic</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {[
            { label: 'Services', id: 'services' },
            { label: 'Why Us', id: 'why-choose' },
            { label: 'Therapists', id: 'therapists' },
            { label: 'Reviews', id: 'testimonials' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#F58220] dark:hover:text-[#F58220] transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#F58220] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => scrollToSection('appointment')}
            className="hidden sm:inline-flex bg-[#F58220] hover:bg-[#E0761B] text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 rounded-full font-bold px-6"
          >
            Book Appointment
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-orange-950/30 rounded-lg transition-colors"
          >
            {isOpen ? <X size={26} className="text-[#F58220]" /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 space-y-4">
            {[
              { label: 'Our Services', id: 'services' },
              { label: 'Why Choose Us', id: 'why-choose' },
              { label: 'Our Therapists', id: 'therapists' },
              { label: 'Patient Reviews', id: 'testimonials' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-[#F58220] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <Button
                onClick={() => scrollToSection('appointment')}
                className="w-full bg-[#F58220] text-white py-6 text-lg font-bold rounded-xl"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}