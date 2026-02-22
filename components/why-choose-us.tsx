'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Activity, Microscope, Award, MapPin, CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    icon: Activity,
    title: 'Shoulder Specialist Care',
    description: 'Specialized focus on shoulder biomechanics, treating rotator cuff tears, frozen shoulder, and impingement syndrome.',
  },
  {
    icon: Microscope,
    title: 'Advanced Diagnosis',
    description: 'Precision clinical assessment to identify the root cause of joint pain without unnecessary surgical intervention.',
  },
  {
    icon: Award,
    title: 'Customized Rehab Plans',
    description: 'One-on-one manual therapy and tailored strengthening protocols designed for 100% functional recovery.',
  },
  {
    icon: MapPin,
    title: 'Trivandrum Premier Hub',
    description: 'Located in Kumarapuram, we are the #1 exclusive center for comprehensive shoulder physical therapy.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative Background Element */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center space-y-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-2 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 text-[#F58220] text-sm font-bold tracking-wide uppercase">
            <CheckCircle2 size={16} /> Best in Shoulder Care
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Why Choose Our Shoulder Center
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Combining clinical expertise with advanced therapeutic techniques to restore your mobility in the heart of Trivandrum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <Card
                key={idx}
                className="group relative p-8 border-slate-100 dark:border-slate-800 hover:border-[#F58220]/40 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2"
              >
                <div className="space-y-5 relative z-10">
                  {/* Icon Container with Branding Gradient */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F58220] to-[#FF9F43] flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
                    <Icon className="text-white" size={30} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#F58220] transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {reason.description}
                    </p>
                  </div>

                  {/* Subtle Decorative Numbering */}
                  <span className="absolute bottom-[-10px] right-[-5px] text-6xl font-black text-slate-50 dark:text-slate-800/50 group-hover:text-orange-100 dark:group-hover:text-orange-900/10 transition-colors -z-10 pointer-events-none">
                    0{idx + 1}
                  </span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}