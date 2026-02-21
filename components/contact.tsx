'use client'

import React from 'react'
import { MapPin, Phone, Mail, Clock, MapIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Kumarapuram, Thiruvananthapuram, Kerala 695011, India',
      link: 'https://maps.google.com/?q=Kumarapuram,Thiruvananthapuram',
    },
    {
      icon: Phone,
      title: 'Phone',
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We're here to help. Reach out to us with any questions
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
                target={isLink && (info.link?.startsWith('https') || info.link?.startsWith('tel:') || info.link?.startsWith('mailto:')) ? '_blank' : undefined}
                className={`group p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 glass-morphism border border-border/50 hover:border-primary/50 transition-all duration-300 ${
                  isLink ? 'cursor-pointer hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-4px]' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mt-1">
                      {info.content}
                    </p>
                  </div>
                </div>
              </Component>
            )
          })}
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-3xl overflow-hidden glass-morphism border-2 border-white/30 dark:border-white/10 shadow-2xl">
          <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-center">
              <MapIcon size={48} className="text-primary mx-auto mb-4" />
              <p className="text-foreground/70 text-lg">
                Kumarapuram, Thiruvananthapuram
              </p>
              <p className="text-foreground/50 text-sm mt-2">
                Interactive map would be displayed here
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 glass-morphism border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Quick Contact</h3>
            <p className="text-foreground/70 leading-relaxed">
              Need immediate assistance? Contact us via WhatsApp for urgent queries. We typically respond within minutes during business hours.
            </p>
            <Button
              onClick={() => window.location.href = 'https://wa.me/918921234567'}
              className="mt-6 bg-green-500 hover:bg-green-600 text-white w-full rounded-full py-3 font-semibold transition-all duration-300 hover:scale-105"
            >
              Chat on WhatsApp
            </Button>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 glass-morphism border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Appointment Booking</h3>
            <p className="text-foreground/70 leading-relaxed">
              Ready to start your recovery journey? Click below to book an appointment directly or call us for personalized assistance.
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById('appointment')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mt-6 bg-gradient-to-r from-primary to-accent text-white w-full rounded-full py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Schedule Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
