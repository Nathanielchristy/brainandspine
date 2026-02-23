'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Award, Calendar } from 'lucide-react'

const therapists = [
  {
    name: 'Dr. AJAY LAL',
    qualification: 'MPT (Cardio)',
    experience: '20 years',
    bio: 'Specialized in shoulder pain management and rehabilitation.',
  },
  
]

export function Therapists() {
  return (
    <section id="therapists" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Our Expert Therapists
          </h2>
          <div className="w-20 h-1.5 bg-[#F58220] mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Highly qualified professionals dedicated to your recovery at Brain & Spine
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {therapists.map((therapist, idx) => (
            <Card
              key={idx}
              className="p-8 border-slate-200 dark:border-slate-800 hover:border-[#F58220]/50 bg-white dark:bg-slate-900 glass-morphism group transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="space-y-6">
                {/* Profile Image / Initial Placeholder */}
                <div className="relative w-24 h-24 mx-auto md:mx-0">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#F58220] to-[#FF9F43] flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-orange-500/20 group-hover:rotate-3 transition-transform">
                    {therapist.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-1.5 rounded-lg shadow-md border border-slate-100 dark:border-slate-700">
                    <Award size={20} className="text-[#F58220]" />
                  </div>
                </div>

                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#F58220] transition-colors">
                    {therapist.name}
                  </h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center">
                    <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#F58220] text-sm font-bold border border-orange-200 dark:border-orange-800/50">
                      {therapist.qualification}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar size={14} />
                      {therapist.experience} Exp.
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left min-h-[60px]">
                  {therapist.bio}
                </p>

                <button className="w-full py-4 px-6 rounded-xl bg-[#F58220] hover:bg-[#E0761B] text-white font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
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