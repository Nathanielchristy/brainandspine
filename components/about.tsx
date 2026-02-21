'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

export function About() {
  const highlights = [
    'Experienced Physiotherapists',
    'Personalized Treatment Plans',
    'Modern Equipment',
    'Evidence-Based Practice',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 dark:from-primary/5 dark:via-accent/5 dark:to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                About Our Clinic
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Brain And Spine Physio Clinic specializes in advanced neuro and spine physiotherapy. We combine evidence-based practices with cutting-edge equipment to deliver exceptional patient outcomes.
              </p>
            </div>

            <p className="text-foreground/70 leading-relaxed">
              Our team of specialized physiotherapists is dedicated to providing personalized treatment plans that address your unique needs and help you achieve your recovery goals with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden md:block">
            <div className="glass-morphism rounded-3xl p-8 border-2 border-white/30 dark:border-white/10">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-morphism p-6 rounded-2xl border border-white/20 dark:border-white/10 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      500+
                    </div>
                    <p className="text-sm text-foreground/70 mt-2">Happy Patients</p>
                  </div>
                  <div className="glass-morphism p-6 rounded-2xl border border-white/20 dark:border-white/10 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      15+
                    </div>
                    <p className="text-sm text-foreground/70 mt-2">Years Experience</p>
                  </div>
                </div>
                <div className="glass-morphism p-6 rounded-2xl border border-white/20 dark:border-white/10 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    98%
                  </div>
                  <p className="text-sm text-foreground/70 mt-2">Patient Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
