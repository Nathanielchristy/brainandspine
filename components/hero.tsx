'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Phone } from 'lucide-react'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden flex items-center">
      {/* Updated Background: Warm tones instead of Blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>

      {/* Animated Gradient Overlay using Brand Orange */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#F58220]/40 to-orange-300/30 rounded-full blur-3xl animate-gradient-flow"
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-[#F58220]/20 rounded-full blur-3xl animate-gradient-flow"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-scale-in">
            {/* Badge updated to orange tint */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/50 dark:bg-orange-900/20 glass-morphism border border-[#F58220]/20 w-fit">
              <MapPin size={16} className="text-[#F58220]" />
              <span className="text-sm font-medium text-foreground">Kumarapuram, Thiruvananthapuram</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Expert Brain & Spine
                <span className="block bg-gradient-to-r from-[#F58220] via-[#FF9F43] to-[#F58220] bg-clip-text text-transparent">
                  Physiotherapy Care
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                Advanced Neuro & Spine Rehabilitation with Personalized Treatment Plans. Experience premium healthcare from our specialized physiotherapists.
              </p>
            </div>

            {/* CTA Buttons updated to Brand Orange */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('appointment')}
                className="bg-[#F58220] hover:bg-[#E0761B] text-white hover:shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 rounded-full py-6 text-base font-semibold px-8"
              >
                Book Appointment
              </Button>
              <Button
                onClick={() => window.location.href = 'tel:+918921234567'}
                variant="outline"
                className="border-2 border-[#F58220] text-[#F58220] hover:bg-orange-50 rounded-full py-6 text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <Phone size={20} />
                Call Now
              </Button>
            </div>
          </div>

          {/* Right Content - Glassmorphism Card */}
          <div className="relative hidden md:block">
            <div className="glass-morphism rounded-3xl p-8 backdrop-blur-xl border-2 border-white/50 dark:border-white/10 shadow-2xl animate-float-up bg-white/40">
              <div className="space-y-6">
                {/* Visual Placeholder updated to Orange Gradient */}
                <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center border border-orange-100">
                   <div className="text-6xl filter drop-shadow-md">🧠</div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Specialized Neuro Care',
                      'Advanced Equipment',
                      'Individual Attention',
                      'Since 2019 Excellence'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#F58220] flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator updated to Orange */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#F58220]/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#F58220] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}