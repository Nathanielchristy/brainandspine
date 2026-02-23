"use client"

import React from 'react'
import Link from 'next/link'
import { 
  Award, 
  Stethoscope, 
  ShieldCheck, 
  GraduationCap, 
  Mail, 
  Linkedin,
  Home
} from 'lucide-react'

// RENAMED TO Page to be explicit for Next.js routing
export default function DirectorPage() {
  const doctorImageUrl = "https://scontent.fblr2-3.fna.fbcdn.net/v/t39.30808-6/547172368_24496180043373408_8659592695864011335_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=-P_qc15nRsgQ7kNvwE8y8y_&_nc_oc=AdkUrad-b1-WMmLcn8KyizeY-PalFLpz3WeucogeamdVflN7OSR8ZOAY2GwC86v8TWk&_nc_zt=23&_nc_ht=scontent.fblr2-3.fna&_nc_gid=NMH7hRxGgaAqu93PFQz0mA&oh=00_AfuNo319kiBqZiPJRgLEVp1TtNjB1CD7kxSfTt_q9vLUTQ&oe=69A22E15"

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      

      <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-2/5">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#F58220]/20 rounded-[3rem] blur-2xl group-hover:bg-[#F58220]/30 transition-all duration-500" />
                <div className="relative aspect-[4/5] rounded-[2.5rem] bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-700 overflow-hidden shadow-2xl">
                  <img 
                    src={doctorImageUrl} 
                    alt="'M. AJAILAL (PT)'"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#1E293B] text-white p-6 rounded-3xl shadow-xl border-4 border-white dark:border-slate-800">
                  <p className="text-3xl font-black text-[#F58220]">15+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Years of Clinical<br/>Excellence</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/20 text-[#F58220] text-xs font-black uppercase tracking-widest">
                  Clinical Director
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-[#1E293B] dark:text-white tracking-tighter leading-tight">
                  'M. AJAILAL' <span className="text-[#F58220]">(PT)</span>
                </h1>
                <p className="text-xl font-bold text-slate-500 dark:text-slate-400 italic">
                  Chief Physiotherapist & Shoulder Rehabilitation Specialist
                </p>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                M. Ajailal is the founder and Clinical Director of <strong>Brain & Spine</strong>. 
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {/* Replaced <Button> with standard <button> to avoid import errors */}
                <button className="bg-[#1E293B] hover:bg-[#F58220] text-white rounded-full px-8 py-4 font-bold transition-all shadow-lg shadow-orange-500/10 active:scale-95">
                  Book a Consultation
                </button>
                <div className="flex gap-2">
                   <a href="#" className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-[#F58220] hover:text-white dark:text-white transition-all shadow-sm">
                      <Linkedin size={20} />
                   </a>
                   <a href="mailto:contact@example.com" className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-[#F58220] hover:text-white dark:text-white transition-all shadow-sm">
                      <Mail size={20} />
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 dark:bg-orange-500/10 rounded-lg text-[#F58220]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter dark:text-white">Education</h3>
            </div>
            <ul className="space-y-4 text-sm dark:text-slate-400">
              <li className="border-l-2 border-[#F58220]/30 pl-4 font-bold">MPT in Neurological Sciences</li>
              <li className="border-l-2 border-[#F58220]/30 pl-4 font-bold">Certified Manual Therapist</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-600">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter dark:text-white">Specialization</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Shoulder Rehab', 'Stroke Recovery', 'Spine Mobility'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-black uppercase tracking-widest dark:text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg text-emerald-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter dark:text-white">Accreditation</h3>
            </div>
            <div className="space-y-2 dark:text-slate-300 font-bold text-sm">
                <div className="flex items-center gap-2">
                    <Award size={16} className="text-[#F58220]" /> ISO 9001:2008 Certified
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#F58220]" /> VSSC Approved Centre
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}