'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Users, Zap, MapPin, Award } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Specialized Neuro Care',
    description: 'Expert treatment by physiotherapists specialized in neurological conditions and brain rehabilitation.',
  },
  {
    icon: Zap,
    title: 'Advanced Equipment',
    description: 'State-of-the-art therapeutic equipment and technology for optimal treatment outcomes.',
  },
  {
    icon: Award,
    title: 'Individual Attention',
    description: 'One-on-one personalized care plans tailored to your specific condition and recovery needs.',
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description: 'Easily accessible clinic in Kumarapuram with flexible appointment scheduling.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative Background Element */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center space-y-4 mb-16 relative z-10">
          <div className="inline-block px-4 py-1.5 mb-2 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 text-[#F58220] text-sm font-bold tracking-wide uppercase">
            Established 2019
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Premium healthcare experience backed by expertise and compassion in the heart of Trivandrum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <Card
                key={idx}
                className="group p-8 border-slate-100 dark:border-slate-800 hover:border-[#F58220]/40 bg-white dark:bg-slate-900 glass-morphism transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2"
              >
                <div className="space-y-5">
                  {/* Icon Container with Logo-inspired Gradient */}
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
                  <span className="absolute bottom-4 right-6 text-5xl font-black text-slate-100 dark:text-slate-800/50 group-hover:text-orange-100 dark:group-hover:text-orange-900/20 transition-colors -z-10 pointer-events-none">
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