'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, ArrowRight, Activity } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden flex items-center bg-white dark:bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 dark:bg-orange-950/10 -skew-x-12 translate-x-20 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content: Text & CTA */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800">
                <Activity size={16} className="text-[#F58220] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#F58220]">Neuro & Spine Specialists</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                Looking for an <br />
                <span className="text-[#F58220]">Effective Recovery</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300">
                After Brain or Spinal Cord Injury?
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Don't settle for standard care. Our specialized physiotherapy clinic in Kumarapuram uses 
                advanced neuro-rehabilitation techniques to help you regain independence and strength.
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                onClick={() => scrollToSection('appointment')}
                className="bg-[#F58220] hover:bg-[#E0761B] text-white shadow-xl shadow-orange-500/20 py-7 px-10 rounded-2xl text-lg font-bold transition-all hover:scale-105 flex gap-2"
              >
                Start Your Recovery <ArrowRight size={20} />
              </Button>
              
              <div className="flex items-center gap-3 px-4">
                <div className="w-12 h-12 rounded-full border-2 border-orange-100 flex items-center justify-center">
                  <Phone size={20} className="text-[#F58220]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Emergency Consult</p>
                  <p className="text-slate-900 dark:text-white font-bold">+91 9633305435</p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 flex items-center gap-4 text-sm text-slate-500">
               {/* <div className="flex -space-x-2">
                 {[1,2,3,4].map((i) => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                     {i === 4 ? '500+' : ''}
                   </div>
                 ))}
               </div> */}
               <p>Trusted by <span className="text-slate-900 dark:text-white font-bold">500+ Patients</span> since 2019</p>
            </div>
          </div>

          {/* Right Content: Professional Imagery */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-in fade-in zoom-in duration-1000">
            {/* Background Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl rotate-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              {/* Replace URL with your actual clinic photo or a professional medical stock photo */}
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
                alt="Physiotherapy Treatment"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-morphism p-4 rounded-xl border border-white/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500 rounded-lg text-white">
                    <Activity size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-orange-600 uppercase">Success Rate</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">98% Patient Recovery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Badge (Floating) */}
            <div className="absolute top-10 -left-4 z-30 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-float">
               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                 <MapPin className="text-[#F58220]" size={20} />
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-400 uppercase leading-none">Located at</p>
                 <p className="text-sm font-bold text-slate-900 dark:text-white">Kumarapuram, TVM</p>
               </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-slate-200 dark:border-slate-800 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-[#F58220] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}