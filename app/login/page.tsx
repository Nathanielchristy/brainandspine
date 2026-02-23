"use client"

import React, { useState } from 'react'
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  ChevronRight, 
  Brain 
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API Call
    setTimeout(() => {
      console.log("Login Attempt:", formData)
      setIsLoading(false)
      // window.location.href = '/dashboard'
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 flex flex-col justify-center items-center p-4">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#E35D25]" />
      
      <div className="w-full max-w-md">
        {/* Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E35D25] shadow-lg shadow-[#E35D25]/20 mb-4 transform -rotate-6">
            <Brain className="text-white w-10 h-10" />
          </div>
          <h1 className="text-2xl font-black text-[#1E293B] dark:text-white uppercase tracking-tighter">
            Brain & Spine
          </h1>
          <p className="text-[#E35D25] text-[10px] font-bold uppercase tracking-[0.3em]">
            Admin Portal Access
          </p>
        </div>

        <Card className="border-none shadow-2xl bg-white dark:bg-slate-900 overflow-hidden">
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="text-xl font-bold text-[#1E293B] dark:text-white">Welcome Back</CardTitle>
            <CardDescription className="text-slate-500">
              Enter your credentials to manage appointments.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E35D25] transition-colors" size={18} />
                  <input 
                    required
                    type="email"
                    placeholder="admin@brainandspine.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-transparent focus:border-[#E35D25] outline-none transition-all text-sm"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    Password
                  </label>
                  <button type="button" className="text-[10px] font-bold text-[#E35D25] hover:underline">
                    Forgot?
                  </button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E35D25] transition-colors" size={18} />
                  <input 
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-transparent focus:border-[#E35D25] outline-none transition-all text-sm"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1E293B] hover:bg-[#2d3a4f] dark:bg-[#E35D25] dark:hover:bg-[#c94d1d] text-white py-6 rounded-xl font-bold transition-all mt-2 relative overflow-hidden group"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Authenticating...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Login
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer info */}
        <p className="mt-8 text-center text-slate-400 text-xs font-medium">
          Protected by end-to-end encryption. <br />
          &copy; {new Date().getFullYear()} Brain & Spine Physiotherapy Clinic.
        </p>
      </div>
    </div>
  )
}