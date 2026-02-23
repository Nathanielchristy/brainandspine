"use client"

import React from 'react'
import { 
  Target, 
  Activity, 
  ShieldCheck, 
  ChevronRight,
  Heart,
  Users,
  Award
} from 'lucide-react'

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-[#E35D25]">
      
      {/* --- 1. ELEGANT HERO (SEO Optimized H1) --- */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 border-b border-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-orange-200"></span>
            <span className="text-[#E35D25] text-xs font-black uppercase tracking-[0.3em]">Our Vision</span>
            <span className="h-[1px] w-8 bg-orange-200"></span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            To be the <span className="text-[#E35D25]">trusted leader</span> in Physiotherapy care.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Empowering healthier, stronger communities through clinical excellence and personalized rehabilitation.
          </p>
        </div>
      </section>

      {/* --- 2. THE TRUST BAR (SEO Keywords: Trusted, ISO, VSSC) --- */}
      {/* <div className="bg-slate-50/50 py-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest"><ShieldCheck size={18} className="text-[#E35D25]"/> ISO 9001:2008</div>
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest"><Award size={18} className="text-[#E35D25]"/> VSSC Approved</div>
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest"><Users size={18} className="text-[#E35D25]"/> 15+ Years Experience</div>
        </div>
      </div> */}

      {/* --- 3. MISSION SECTION (Clean Cards) --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#E35D25]/5 group-hover:bg-transparent transition-colors duration-500"></div>
              {/* Optional: Add a professional clinic image here */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <Target size={120} className="text-slate-200 group-hover:text-[#E35D25]/20 transition-colors" />
              </div>
            </div>
            {/* Small floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50">
               <Heart className="text-[#E35D25] fill-[#E35D25] mb-2" size={24} />
               <p className="text-xs font-black uppercase tracking-tighter">Patient Centric</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <header className="space-y-4">
               <span className="text-[#E35D25] text-xs font-black uppercase tracking-[0.3em]">Our Mission</span>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-snug">
                Expert, evidence-based care <br className="hidden lg:block"/> 
                tailored to <span className="text-[#E35D25]">your movement.</span>
              </h3>
            </header>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              "To deliver expert, evidence-based Physiotherapy that restores movement, relieves pain and enhances quality of life."
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E35D25] shrink-0" />
                <p className="text-sm font-bold text-slate-700">Restoration of pain-free physical function</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E35D25] shrink-0" />
                <p className="text-sm font-bold text-slate-700">Data-driven clinical rehabilitation protocols</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E35D25] shrink-0" />
                <p className="text-sm font-bold text-slate-700">Community wellness and strength building</p>
              </li>
            </ul>

            <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-[#E35D25] transition-all shadow-lg hover:shadow-orange-200">
              Learn More About Our Process <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* --- 4. CORE VALUES (SEO: Physiotherapy Kerala, Movement Recovery) --- */}
      <section className="py-24 bg-slate-50/50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<Activity size={24} />}
            title="Evidence Based"
            desc="Every treatment is backed by the latest clinical research in physiotherapy and biomechanics."
          />
          <ValueCard 
            icon={<Users size={24} />}
            title="Community First"
            desc="Building stronger health foundations for our local communities through education and care."
          />
          <ValueCard 
            icon={<ShieldCheck size={24} />}
            title="Quality Assured"
            desc="Maintaining international standards as an ISO 9001:2008 certified rehabilitation center."
          />
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#E35D25] mb-6 group-hover:bg-[#E35D25] group-hover:text-white transition-all">
        {icon}
      </div>
      <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-4">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  )
}