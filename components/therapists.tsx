'use client'

import React from 'react'
import { Card } from '@/components/ui/card'

const therapists = [
  {
    name: 'Dr. Priya Sharma',
    qualification: 'MPT (Neurology)',
    experience: '12 years',
    bio: 'Specialized in stroke rehabilitation and neurological disorders with extensive clinical experience.',
  },
  {
    name: 'Arjun Nair',
    qualification: 'MPT (Orthopedics)',
    experience: '10 years',
    bio: 'Expert in spine rehabilitation and post-surgical recovery with proven patient outcomes.',
  },
]

export function Therapists() {
  return (
    <section id="therapists" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Our Expert Therapists
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Highly qualified professionals dedicated to your recovery
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {therapists.map((therapist, idx) => (
            <Card
              key={idx}
              className="p-8 border-border/50 hover:border-primary/50 bg-white/60 dark:bg-slate-900/60 glass-morphism group transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105"
            >
              <div className="space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold">
                  {therapist.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {therapist.name}
                  </h3>
                  <p className="text-primary font-semibold">{therapist.qualification}</p>
                  <p className="text-foreground/70 text-sm">{therapist.experience} Experience</p>
                </div>

                <p className="text-foreground/70 leading-relaxed">
                  {therapist.bio}
                </p>

                <button className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
                  Consult Now
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
