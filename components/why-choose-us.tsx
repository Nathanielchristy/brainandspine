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
    <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Why Choose Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Premium healthcare experience backed by expertise and compassion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <Card
                key={idx}
                className="group p-8 border-border/50 hover:border-accent/50 bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-900/80 dark:to-slate-900/40 glass-morphism transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:translate-y-[-4px]"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
