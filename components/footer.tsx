'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Clinic Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center font-bold text-lg">
                B
              </div>
              <span className="font-bold text-lg">Brain & Spine</span>
            </Link>
            <p className="text-white/70 leading-relaxed text-sm">
              Premium physiotherapy clinic specializing in neuro and spine rehabilitation with personalized care.
            </p>
            <div className="flex gap-3 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-400 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Services</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              {[
                'Neuro Physiotherapy',
                'Spine Rehabilitation',
                'Stroke Recovery',
                'Post-Surgical Rehab',
                'Chronic Pain Management',
              ].map((service, idx) => (
                <li key={idx}>
                  <button className="hover:text-cyan-400 transition-colors duration-200 group inline-flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 group-hover:w-2 transition-all"></span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Our Therapists', id: 'therapists' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="hover:text-cyan-400 transition-colors duration-200 group inline-flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400 group-hover:w-2 transition-all"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Info</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <div>
                <p className="font-semibold text-white mb-1">Address</p>
                <p>Kumarapuram, Thiruvananthapuram, Kerala 695011</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Phone</p>
                <a href="tel:+918921234567" className="hover:text-cyan-400 transition-colors">
                  +91 89 2123 4567
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Hours</p>
                <p>Mon-Sat: 9 AM - 7 PM</p>
                <p>Sun: 10 AM - 4 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-white/60 text-sm">
          <p className="text-center sm:text-left">
            © {currentYear} Brain & Spine Physio Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
            <div className="flex items-center gap-2 text-white/80">
              Made with <Heart size={16} className="text-red-400" /> in Kerala
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
