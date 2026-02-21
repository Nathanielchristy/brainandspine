'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CalendarCheck } from 'lucide-react'

export function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for booking! We will contact you soon.')
    setFormData({ name: '', phone: '', email: '', treatment: '', date: '', message: '' })
  }

  return (
    <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50/30 dark:bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-2">
            <CalendarCheck className="text-[#F58220]" size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Book Your Appointment
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Schedule your consultation with our expert physiotherapists in Kumarapuram
          </p>
        </div>

        <Card className="p-8 sm:p-10 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 glass-morphism shadow-2xl shadow-orange-500/5 relative overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F58220]/10 rounded-full blur-3xl"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 dark:text-slate-200 font-semibold">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#F58220]/20 focus:border-[#F58220] transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 dark:text-slate-200 font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#F58220]/20 focus:border-[#F58220] transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 dark:text-slate-200 font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#F58220]/20 focus:border-[#F58220] transition-all"
                  required
                />
              </div>

              {/* Treatment Type */}
              <div className="space-y-2">
                <Label htmlFor="treatment" className="text-slate-700 dark:text-slate-200 font-semibold">
                  Treatment Type
                </Label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className="w-full h-10 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#F58220]/20 focus:border-[#F58220] focus:outline-none transition-all"
                  required
                >
                  <option value="">Select treatment</option>
                  <option value="neuro">Neuro Physiotherapy</option>
                  <option value="spine">Spine Rehabilitation</option>
                  <option value="stroke">Stroke Recovery Therapy</option>
                  <option value="postsurgical">Post-Surgical Rehabilitation</option>
                  <option value="chronic">Chronic Pain Management</option>
                  <option value="sports">Sports Injury Rehabilitation</option>
                  <option value="home">Home Services</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label htmlFor="date" className="text-slate-700 dark:text-slate-200 font-semibold">
                Preferred Date
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#F58220]/20 focus:border-[#F58220] transition-all"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-700 dark:text-slate-200 font-semibold">
                Message
              </Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your condition or concerns"
                rows={4}
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#F58220]/20 focus:border-[#F58220] focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#F58220] hover:bg-[#E0761B] text-white hover:shadow-xl hover:shadow-orange-500/30 py-7 text-lg font-bold transition-all duration-300 hover:scale-[1.02] rounded-xl"
            >
              Confirm Booking Request
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 italic">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              We usually respond within 2 hours
            </div>
          </form>
        </Card>
      </div>
    </section>
  )
}