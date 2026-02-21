'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, Bone, Activity, Zap, Heart, Footprints, Home } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Neuro Physiotherapy',
    description: 'Specialized treatment for neurological conditions including stroke, Parkinson\'s, and spinal injuries with evidence-based rehabilitation.',
  },
  {
    icon: Bone,
    title: 'Spine Rehabilitation',
    description: 'Comprehensive care for back pain, herniated discs, and spinal alignment issues with personalized recovery plans.',
  },
  {
    icon: Activity,
    title: 'Stroke Recovery Therapy',
    description: 'Intensive rehabilitation programs designed to restore movement, function, and independence post-stroke.',
  },
  {
    icon: Zap,
    title: 'Post-Surgical Rehabilitation',
    description: 'Guided recovery protocols following surgery to optimize healing and restore full functional capacity.',
  },
  {
    icon: Heart,
    title: 'Chronic Pain Management',
    description: 'Advanced techniques to address persistent pain through targeted physiotherapy and lifestyle modifications.',
  },
  {
    icon: Footprints,
    title: 'Sports Injury Rehabilitation',
    description: 'Expert treatment for athletes aiming to return to peak performance safely and effectively.',
  },
  {
    icon: Home,
    title: 'Home Physiotherapy Services',
    description: 'Personalized in-home therapy sessions for those with mobility challenges or preference for convenience.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-transparent">
      {/* Soft Brand Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent dark:via-orange-500/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Our Services
          </h2>
          {/* Accent line under heading */}
          <div className="w-24 h-1.5 bg-[#F58220] mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto pt-2">
            Comprehensive physiotherapy solutions tailored to your specific needs and recovery goals are designed to help you regain strength, mobility, and independence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card
                key={idx}
                className="group p-8 border-slate-200/60 dark:border-slate-800 hover:border-[#F58220]/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 bg-white dark:bg-slate-900 glass-morphism overflow-hidden relative"
              >
                {/* Subtle top-right glow on hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#F58220]/5 rounded-full blur-2xl group-hover:bg-[#F58220]/10 transition-colors duration-300"></div>

                <div className="space-y-4 relative z-10">
                  {/* Icon Box using Brand Orange */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F58220] to-[#FF9F43] flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                    <Icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#F58220] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed min-h-[80px]">
                    {service.description}
                  </p>
                  
                  <Button
                    variant="ghost"
                    className="text-[#F58220] hover:text-[#E0761B] hover:bg-orange-50 dark:hover:bg-orange-900/20 group-hover:translate-x-2 transition-all duration-300 p-0 h-auto font-semibold"
                  >
                    Learn More <span className="ml-2">→</span>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}