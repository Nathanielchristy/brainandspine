'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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
    // Here you would typically send the form data to your backend
    alert('Thank you for booking! We will contact you soon.')
    setFormData({ name: '', phone: '', email: '', treatment: '', date: '', message: '' })
  }

  return (
    <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Book Your Appointment
          </h2>
          <p className="text-lg text-foreground/70">
            Schedule your consultation with our expert physiotherapists
          </p>
        </div>

        <Card className="p-8 sm:p-10 border-border/50 bg-gradient-to-br from-white/70 to-white/40 dark:from-slate-900/70 dark:to-slate-900/40 glass-morphism shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border-border/50 bg-white/50 dark:bg-slate-900/50 focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  className="border-border/50 bg-white/50 dark:bg-slate-900/50 focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="border-border/50 bg-white/50 dark:bg-slate-900/50 focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Treatment Type */}
              <div className="space-y-2">
                <Label htmlFor="treatment" className="text-foreground font-semibold">
                  Treatment Type
                </Label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border/50 rounded-lg bg-white/50 dark:bg-slate-900/50 text-foreground focus:border-primary focus:outline-none transition-colors"
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
              <Label htmlFor="date" className="text-foreground font-semibold">
                Preferred Date
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="border-border/50 bg-white/50 dark:bg-slate-900/50 focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-semibold">
                Message
              </Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your condition or concerns"
                rows={4}
                className="w-full px-3 py-2 border border-border/50 rounded-lg bg-white/50 dark:bg-slate-900/50 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/40 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-full"
            >
              Book Appointment
            </Button>

            <p className="text-sm text-foreground/60 text-center">
              We'll confirm your appointment within 2 hours. Thank you for choosing us!
            </p>
          </form>
        </Card>
      </div>
    </section>
  )
}
