"use client"

import React from 'react'
import Link from 'next/link' // Import Link for navigation
import { 
  Dna, 
  Target, 
  Move, 
  Activity, 
  Microscope,
  Home
  // ArrowLeft, // Import ArrowLeft for the button icon
} from 'lucide-react'

export default function ShoulderVisionPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      

      {/* --- SEO HERO SECTION --- */}
      <section className="relative py-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute right-[-5%] top-[-10%] opacity-5">
            <Move size={500} className="rotate-12 text-[#E35D25]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <header className="max-w-4xl pt-8 lg:pt-0"> {/* Added padding for mobile back button space */}
            <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-slate-200" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#1E293B] mb-8 leading-[1.1]">
                Leading the Future of <br />
                <span className="text-[#E35D25]">Shoulder Rehabilitation.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
              At Brain & Spine, we specialize in the complex mechanics of the shoulder joint. 
              Under <strong>Dr.M. Ajailal (PT)</strong>, we restore reach, strength, and pain-free 
              motion through clinical precision.
            </p>
          </header>
        </div>
      </section>

      {/* --- THE VISION FOR SHOULDER CARE --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-black text-[#E35D25] uppercase tracking-[0.4em]">Our Vision</h2>
              <h3 className="text-4xl font-black text-[#1E293B]">Restoring the Freedom of Movement</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our vision is to become the premier destination for <strong>Shoulder Pathologies</strong> in Kerala. 
                We aim to eliminate the need for invasive surgeries whenever possible by utilizing 
                biological principles of tissue healing and advanced mechanical force therapy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Dna className="text-[#E35D25] mb-4" />
                <h4 className="font-bold mb-2">Biomechanical Focus</h4>
                <p className="text-xs text-slate-500">Targeting the scapular rhythm and rotator cuff stability.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Activity className="text-[#E35D25] mb-4" />
                <h4 className="font-bold mb-2">Performance Goals</h4>
                <p className="text-xs text-slate-500">Returning athletes and workers to overhead activities safely.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-8 bg-[#1E293B] text-white rounded-[2.5rem] shadow-2xl relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-[#E35D25]" /> Our Mission
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-[#E35D25] font-black italic">01.</span>
                  <p className="text-slate-300 text-sm">To provide <strong>evidence-based protocols</strong> for Rotator Cuff tears, Frozen Shoulder (Adhesive Capsulitis), and Labral injuries.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#E35D25] font-black italic">02.</span>
                  <p className="text-slate-300 text-sm">To maintain our <strong>ISO 9001:2008</strong> excellence by ensuring every shoulder patient receives a data-driven recovery path.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#E35D25] font-black italic">03.</span>
                  <p className="text-slate-300 text-sm">To leverage <strong>VSSC-approved</strong> integrity in providing the highest level of care for post-operative shoulder rehabilitation.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SHOULDER REHAB SPECIALTIES --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1E293B] uppercase tracking-tighter">Clinical Specialization</h2>
            <div className="h-1 w-20 bg-[#E35D25] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpecialtyCard 
              title="Frozen Shoulder" 
              desc="Aggressive yet safe mobilization techniques to restore range of motion in Adhesive Capsulitis cases." 
            />
            <SpecialtyCard 
              title="Rotator Cuff Rehab" 
              desc="Strengthening and neuromuscular re-education to manage partial tears and post-surgical repairs." 
            />
            <SpecialtyCard 
              title="Sports Shoulder" 
              desc="High-performance rehab for dislocations, AC joint injuries, and throwing-related shoulder pain." 
            />
          </div>
        </div>
      </section>

      {/* --- QUALITY PROMISE --- */}
      <section className="py-20 text-center px-6">
        <Microscope className="w-12 h-12 text-[#E35D25] mx-auto mb-6" />
        <h2 className="text-3xl font-black text-[#1E293B] mb-4 uppercase">The M. Ajailal (PT) Standard</h2>
        <p className="max-w-3xl mx-auto text-slate-500 italic text-lg">
          "The shoulder is the most mobile joint in the human body, making it the most complex to rehabilitate. 
          At Brain & Spine, we combine <strong>modern medicine</strong> with mechanical precision to ensure 
          your shoulder doesn't just heal, but thrives."
        </p>
      </section>
    </div>
  )
}

function SpecialtyCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-[#E35D25] transition-all group">
      <h4 className="text-xl font-bold mb-4 text-[#1E293B] group-hover:text-[#E35D25] transition-colors">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}