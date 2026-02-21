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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50/50 via-white to-orange-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-orange-100 dark:bg-orange-900/30 text-[#F58220] text-sm font-bold uppercase tracking-wider">
                Our Journey
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
                About Our Clinic
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Brain And Spine Physio Clinic specializes in advanced neuro and spine physiotherapy. We combine evidence-based practices with cutting-edge equipment to deliver exceptional patient outcomes.
              </p>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our team of specialized physiotherapists is dedicated to providing personalized treatment plans that address your unique needs and help you achieve your recovery goals with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F58220] flex items-center justify-center flex-shrink-0 shadow-sm shadow-orange-500/20">
                    <Check size={14} className="text-white stroke-[3px]" />
                  </div>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Stats Section */}
          <div className="hidden md:block">
            <div className="glass-morphism rounded-3xl p-8 border-2 border-orange-100 dark:border-white/10 bg-white/40 shadow-xl shadow-orange-500/5">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-morphism p-6 rounded-2xl border border-white dark:border-white/5 text-center bg-white/60">
                    <div className="text-4xl font-bold text-[#F58220]">
                      500+
                    </div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-tighter">Happy Patients</p>
                  </div>
                  <div className="glass-morphism p-6 rounded-2xl border border-white dark:border-white/5 text-center bg-white/60">
                    <div className="text-4xl font-bold text-[#F58220]">
                      15+
                    </div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-tighter">Years Experience</p>
                  </div>
                </div>
                <div className="glass-morphism p-6 rounded-2xl border border-white dark:border-white/5 text-center bg-gradient-to-r from-[#F58220] to-[#FF9F43] shadow-lg shadow-orange-500/20">
                  <div className="text-4xl font-bold text-white">
                    98%
                  </div>
                  <p className="text-sm font-bold text-orange-50 mt-1 uppercase tracking-wider">Patient Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}