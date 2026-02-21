'use client'

import React from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Kumarapuram, Thiruvananthapuram, Kerala 695011, India',
      link: 'https://www.google.com/maps/place/Brain+and+Spine+Physio+Clinic/@8.5141511,76.9242237,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05bb0713872621:0x766b732b66df18bb!8m2!3d8.5141511!4d76.9242237!16s%2Fg%2F11hdxg845w?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 89 2123 4567',
      link: 'tel:+918921234567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@brainandspinephysio.com',
      link: 'mailto:info@brainandspinephysio.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Sat: 9 AM - 7 PM, Sun: 10 AM - 4 PM',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#F58220] text-sm font-bold uppercase tracking-widest">
            Contact Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Visit our clinic in Kumarapuram or reach out to us for any health concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            const isLink = 'link' in info
            const Component = isLink ? 'a' : 'div'

            return (
              <Component
                key={idx}
                href={isLink ? info.link : undefined}
                target={isLink ? '_blank' : undefined}
                className={`group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-[#F58220]/50 transition-all duration-500 shadow-sm ${
                  isLink ? 'cursor-pointer hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center group-hover:bg-[#F58220] transition-colors duration-300">
                    <Icon className="text-[#F58220] group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {info.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-1">
                      {info.content}
                    </p>
                  </div>
                </div>
              </Component>
            )
          })}
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl h-[450px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.865529340915!2d76.92440317588645!3d8.512461496735515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbeec54627d3%3A0xc665979c3f4a3e2e!2sBrain%20%26%20Spine%20Physio%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.2] contrast-[1.1]"
          ></iframe>
          <a 
            href="https://www.google.com/maps/place/Brain+and+Spine+Physio+Clinic/@8.5141511,76.9242237,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05bb0713872621:0x766b732b66df18bb!8m2!3d8.5141511!4d76.9242237!16s%2Fg%2F11hdxg845w?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            className="absolute bottom-4 right-4 bg-white dark:bg-slate-900 px-4 py-2 rounded-lg shadow-lg text-xs font-bold text-[#F58220] hover:bg-orange-50 transition-colors border border-orange-100 dark:border-slate-800"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Action Blocks */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-slate-900 border border-green-100 dark:border-green-900/30">
            <div className="flex items-center gap-3 mb-4">
               <MessageCircle className="text-green-600" size={28} />
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Quick Chat</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Have a quick question? Connect with our team on WhatsApp for immediate support regarding treatments and timings.
            </p>
            <Button
              onClick={() => window.location.href = 'https://wa.me/919633305435'}
              className="mt-6 bg-[#25D366] hover:bg-[#128C7E] text-white w-full rounded-xl py-6 font-bold text-lg shadow-lg shadow-green-500/20 transition-all hover:scale-[1.02]"
            >
              Message on WhatsApp
            </Button>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-slate-900 border border-orange-100 dark:border-orange-900/30">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-8 h-8 bg-[#F58220] rounded-lg flex items-center justify-center text-white font-bold text-sm">B</div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Start Recovery</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Book a comprehensive evaluation with our neuro and spine specialists. We ensure personalized one-on-one attention.
            </p>
            <Button
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 bg-[#F58220] hover:bg-[#E0761B] text-white w-full rounded-xl py-6 font-bold text-lg shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02]"
            >
              Book My Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}