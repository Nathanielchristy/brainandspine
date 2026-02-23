"use client"

import React, { useState, useMemo } from 'react'
import { Calendar as CalendarIcon, Clock, User, Phone, CheckCircle2, X, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  "Orthopedic Rehabilitation",
  "Neurological Rehabilitation",
  "Cardiothoracic Rehabilitation",
  "Post Surgical Rehabilitation",
  "Paediatric Rehabilitation",
  "Geriatric Rehabilitation",
  "Sports Rehabilitation and Injury Prevention",
  "Craniosacral Therapy",
  "Home Visit Consultation"
]

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]

// YOUR GOOGLE APPS SCRIPT URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz-gA_QGwlSzPZwfmJDGWs_le2k0f0OSSM-l_OIDzyA92-jpboROKDwTF2Lbb4-B3ZhfQ/exec";

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedTime, setSelectedTime] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // Added loading state
  const [formData, setFormData] = useState({ name: '', phone: '', service: '' })

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date()
      d.setDate(d.getDate() + i)
      return d
    })
  }, [])

  const isSunday = (date: Date) => date.getDay() === 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedTime || isSubmitting) return
    
    setIsSubmitting(true)

    const payload = {
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      date: selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }),
      time: selectedTime
    }

    try {
      // Using 'no-cors' and 'text/plain' is the most reliable way 
      // to talk to Google Apps Script from a browser frontend.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload),
      })

      // Because 'no-cors' doesn't let us read the response, 
      // we assume success if no network error occurred.
      setShowSuccess(true)
    } catch (error) {
      console.error("Submission error:", error)
      alert("There was an error booking your appointment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppNotify = () => {
    const message = encodeURIComponent(`Hello Brain & Spine Clinic, I have just booked an appointment via your website.\n\nName: ${formData.name}\nDate: ${selectedDate.toDateString()}\nTime: ${selectedTime}\nService: ${formData.service}`);
    window.open(`https://wa.me/918921234567?text=${message}`, '_blank');
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 py-12 px-4 relative">
      
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <Card className="max-w-md w-full border-none shadow-2xl bg-white dark:bg-slate-900 overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-1 bg-[#E35D25]" />
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={44} className="text-green-600 dark:text-green-400" />
              </div>
              
              <h2 className="text-2xl font-bold text-[#1E293B] dark:text-white mb-2">Request Received!</h2>
              
              <div className="text-slate-600 dark:text-slate-400 space-y-2 mb-8">
                <p>Thank you, <span className="font-bold text-[#1E293B] dark:text-white">{formData.name}</span>.</p>
                <p>We've noted your preference for:</p>
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg inline-block">
                  <p className="font-bold text-[#E35D25]">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
                  <p className="text-sm font-semibold">{selectedTime}</p>
                </div>
                <p className="text-sm pt-2 italic">Our team will call you shortly to confirm.</p>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  onClick={handleWhatsAppNotify}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white py-6 rounded-xl font-bold flex gap-2"
                >
                  <MessageSquare size={20} />
                  Notify us via WhatsApp
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => setShowSuccess(false)}
                  className="text-slate-500 hover:text-slate-800 dark:hover:text-white"
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
             <div className="w-16 h-16 rounded-full bg-[#E35D25] flex items-center justify-center shadow-lg shadow-[#E35D25]/20">
                <BrainIcon className="text-white w-10 h-10" />
             </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] dark:text-white uppercase tracking-tight">
            Brain & Spine
          </h1>
          <p className="text-[#E35D25] font-bold text-sm tracking-[0.2em] uppercase mb-2">Physiotherapy & Rehab</p>
          <div className="h-1 w-20 bg-[#E35D25] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <Card className="border-none shadow-xl bg-white dark:bg-slate-900 overflow-hidden">
              <CardHeader className="bg-[#1E293B] text-white">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CalendarIcon size={20} className="text-[#E35D25]" /> 1. Select Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                  {weekDays.map((date, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => { setSelectedDate(date); setSelectedTime(''); }}
                      className={cn(
                        "flex flex-col items-center min-w-[85px] p-4 rounded-xl border-2 transition-all",
                        selectedDate.toDateString() === date.toDateString()
                          ? "border-[#E35D25] bg-[#FFF7F5] dark:bg-[#E35D25]/10"
                          : "border-slate-100 dark:border-slate-800 hover:border-slate-200"
                      )}
                    >
                      <span className={cn(
                        "text-xs font-bold uppercase",
                        selectedDate.toDateString() === date.toDateString() ? "text-[#E35D25]" : "text-slate-400"
                      )}>
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </span>
                      <span className="text-2xl font-black text-[#1E293B] dark:text-white">{date.getDate()}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-bold text-[#1E293B] dark:text-slate-300 mb-4 flex items-center gap-2">
                    <Clock size={16} className="text-[#E35D25]" /> Available Slots
                  </h3>
                  
                  {isSunday(selectedDate) ? (
                    <div className="p-10 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200">
                      <p className="text-[#1E293B] font-semibold">The Clinic is closed on Sundays.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={cn(
                            "py-3 rounded-xl font-bold text-sm transition-all border-2",
                            selectedTime === slot
                              ? "bg-[#E35D25] border-[#E35D25] text-white shadow-md shadow-[#E35D25]/30"
                              : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 hover:border-[#E35D25]"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card className="border-none shadow-xl bg-white dark:bg-slate-900 sticky top-6 border-t-4 border-t-[#E35D25]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-[#1E293B] dark:text-white">
                  <User size={20} className="text-[#E35D25]" /> 2. Patient Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500 ml-1">Full Name</label>
                    <input 
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-transparent focus:border-[#E35D25] outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500 ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-transparent focus:border-[#E35D25] outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500 ml-1">Service Required</label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-transparent focus:border-[#E35D25] outline-none transition-all text-sm"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select Service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  
                  <div className="mt-6 p-5 bg-[#1E293B] rounded-2xl text-white space-y-3">
                    <div className="flex justify-between items-center text-sm border-b border-slate-700 pb-2">
                      <span className="text-slate-400">Date:</span>
                      <span className="font-bold">{selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Slot:</span>
                      <span className="font-bold text-[#E35D25]">{selectedTime || "Pending"}</span>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    disabled={!selectedTime || isSubmitting}
                    className="w-full bg-[#E35D25] hover:bg-[#c94d1d] text-white py-7 text-lg font-black rounded-2xl shadow-lg shadow-[#E35D25]/20 transition-all uppercase tracking-wider disabled:opacity-50"
                  >
                    {isSubmitting ? "Booking..." : "Confirm Appointment"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" />
    </svg>
  )
}