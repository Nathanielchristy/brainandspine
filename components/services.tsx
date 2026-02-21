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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive physiotherapy solutions tailored to your specific needs and recovery goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card
                key={idx}
                className="group p-8 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-white/50 dark:bg-slate-900/50 glass-morphism"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 group-hover:translate-x-2 transition-all duration-300 p-0 h-auto"
                  >
                    Learn More →
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
