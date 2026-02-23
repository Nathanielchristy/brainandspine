"use client"

import React, { useState, useMemo } from 'react'
import { 
  Users, 
  Search, 
  MoreVertical,
  Phone,
  CheckCircle,
  Clock3,
  XCircle,
  ArrowLeft
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

// Dummy Data
const INITIAL_DATA = [
  { id: '1', name: 'John Doe', phone: '+91 98765 43210', service: 'Orthopedic Rehabilitation', date: '2024-05-20', time: '09:00 AM', status: 'Approved' },
  { id: '2', name: 'Sarah Smith', phone: '+91 88765 12345', service: 'Sports Rehabilitation', date: '2024-05-20', time: '11:00 AM', status: 'Pending' },
  { id: '3', name: 'Michael Ross', phone: '+91 77234 56789', service: 'Neurological Rehab', date: '2024-05-21', time: '04:00 PM', status: 'Approved' },
  { id: '4', name: 'Elena Gilbert', phone: '+91 99887 76655', service: 'Geriatric Rehabilitation', date: '2024-05-22', time: '10:00 AM', status: 'Pending' },
  { id: '5', name: 'Harvey Specter', phone: '+91 91234 56780', service: 'Post Surgical Rehab', date: '2024-05-20', time: '03:00 PM', status: 'Approved' },
]

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState(INITIAL_DATA)
  const [searchTerm, setSearchTerm] = useState('')

  // Update Status Handler
  const updateStatus = (id: string, newStatus: string) => {
    setAppointments(prev => prev.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ))
  }

  // Stats calculation
  const stats = useMemo(() => ({
    total: appointments.length,
    approved: appointments.filter(a => a.status === 'Approved').length,
    pending: appointments.filter(a => a.status === 'Pending').length,
  }), [appointments])

  const filteredData = (status: string) => {
    return appointments.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = status === 'all' ? true : app.status === status
      return matchesSearch && matchesStatus
    })
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#E35D25] flex items-center justify-center">
                    <CheckCircle className="text-white w-5 h-5" />
                </div>
                <h1 className="text-2xl font-extrabold text-[#1E293B] dark:text-white uppercase tracking-tight">
                Brain and spine <span className="text-[#E35D25]">Management</span>
                </h1>
            </div>
            <p className="text-slate-500 font-medium">Review and manage patient appointment requests.</p>
          </div>
          <Button variant="outline" className="border-slate-200 dark:border-slate-800 flex gap-2">
            <ArrowLeft size={18} /> Back to Site
          </Button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard label="Total Requests" value={stats.total} icon={Users} color="text-blue-600" bg="bg-blue-50 dark:bg-blue-500/10" />
          <StatCard label="Approved" value={stats.approved} icon={CheckCircle} color="text-green-600" bg="bg-green-50 dark:bg-green-500/10" />
          <StatCard label="Pending Review" value={stats.pending} icon={Clock3} color="text-[#E35D25]" bg="bg-[#FFF7F5] dark:bg-[#E35D25]/10" />
        </div>

        {/* Interactive Tabs & Filter Section */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <TabsList className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl h-auto">
              <TabsTrigger value="all" className="rounded-lg px-6 py-2 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 shadow-sm">All</TabsTrigger>
              <TabsTrigger value="Pending" className="rounded-lg px-6 py-2 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 shadow-sm">Pending</TabsTrigger>
              <TabsTrigger value="Approved" className="rounded-lg px-6 py-2 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 shadow-sm">Approved</TabsTrigger>
            </TabsList>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text"
                placeholder="Search patient name..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 outline-none focus:border-[#E35D25] transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {['all', 'Pending', 'Approved'].map((tabStatus) => (
            <TabsContent key={tabStatus} value={tabStatus} className="mt-0 outline-none">
              <Card className="border-none shadow-xl bg-white dark:bg-slate-900 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[11px] font-bold tracking-widest border-b border-slate-100 dark:border-slate-800">
                        <th className="px-6 py-4">Patient Information</th>
                        <th className="px-6 py-4">Service Required</th>
                        <th className="px-6 py-4">Appt. Details</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                      {filteredData(tabStatus).map((app) => (
                        <tr key={app.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-5">
                            <div className="flex flex-col">
                              <span className="font-bold text-[#1E293B] dark:text-white">{app.name}</span>
                              <span className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                <Phone size={12} className="text-[#E35D25]" /> {app.phone}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                              {app.service}
                            </span>
                          </td>
                          <td className="px-6 py-5 text-sm">
                            <div className="font-bold text-[#1E293B] dark:text-slate-200">{app.date}</div>
                            <div className="text-xs text-[#E35D25] font-black">{app.time}</div>
                          </td>
                          <td className="px-6 py-5">
                            <StatusBadge status={app.status} />
                          </td>
                          <td className="px-6 py-5 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="hover:bg-[#FFF7F5] dark:hover:bg-slate-800 hover:text-[#E35D25] rounded-full">
                                  <MoreVertical size={20} />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-52 p-2 rounded-xl border-2 border-slate-100 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                                <DropdownMenuLabel className="text-[10px] text-slate-400 uppercase tracking-widest p-2">Update Request</DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800" />
                                <DropdownMenuItem 
                                  onClick={() => updateStatus(app.id, 'Approved')}
                                  className="flex items-center gap-2 p-3 rounded-lg focus:bg-green-50 dark:focus:bg-green-500/10 focus:text-green-700 dark:focus:text-green-400 cursor-pointer font-bold text-sm transition-colors"
                                >
                                  <CheckCircle size={16} /> Mark Approved
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => updateStatus(app.id, 'Pending')}
                                  className="flex items-center gap-2 p-3 rounded-lg focus:bg-amber-50 dark:focus:bg-amber-500/10 focus:text-amber-700 dark:focus:text-amber-400 cursor-pointer font-bold text-sm transition-colors"
                                >
                                  <Clock3 size={16} /> Set as Pending
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800" />
                                <DropdownMenuItem className="flex items-center gap-2 p-3 rounded-lg focus:bg-red-50 dark:focus:bg-red-500/10 focus:text-red-700 dark:focus:text-red-400 cursor-pointer font-bold text-sm transition-colors">
                                  <XCircle size={16} /> Cancel Request
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

function StatCard({ label, value, icon: Icon, color, bg }: any) {
  return (
    <Card className="border-none shadow-md overflow-hidden bg-white dark:bg-slate-900">
      <CardContent className="p-6 flex items-center gap-5">
        <div className={cn("p-4 rounded-2xl", bg)}>
          <Icon className={cn("w-6 h-6", color)} />
        </div>
        <div>
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</p>
          <p className="text-3xl font-black text-[#1E293B] dark:text-white">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Approved: "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20",
    Pending: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  }
  return (
    <span className={cn(
      "text-[10px] uppercase font-black px-3 py-1 rounded-full border",
      styles[status] || "bg-slate-100 text-slate-600 border-slate-200"
    )}>
      {status}
    </span>
  )
}