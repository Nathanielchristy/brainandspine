'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    text: 'Exceptional care and professional approach. I recovered much faster than expected. The therapists are truly dedicated to their work.',
    rating: 5,
  },
  {
    name: 'Meera Iyer',
    text: 'Best physiotherapy clinic in Kumarapuram. The personalized treatment plan made all the difference in my recovery journey.',
    rating: 5,
  },
  {
    name: 'Arun Menon',
    text: 'Professional, caring, and results-driven. Highly recommend for anyone seeking specialized physiotherapy treatment.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Patient Testimonials
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from our satisfied patients about their recovery journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="p-8 border-border/50 hover:border-primary/50 bg-gradient-to-br from-white/70 to-white/40 dark:from-slate-900/70 dark:to-slate-900/40 glass-morphism group transition-all duration-300 hover:shadow-lg hover:shadow-primary/15 hover:translate-y-[-4px]"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/30">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">Patient</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
