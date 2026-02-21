import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MessageCircle } from 'lucide-react'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'Brain & Spine Physio Clinic | Expert Physiotherapy in Kumarapuram',
  description: 'Expert Brain & Spine Physiotherapy Care in Kumarapuram, Thiruvananthapuram. Specialized neuro and spine rehabilitation with personalized treatment plans. Since 2019.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  const whatsappNumber = "919633305435" // Replace with your actual number
  const initialMessage = encodeURIComponent("Hello Brain & Spine Clinic, I would like to enquire about an appointment.")

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}

        {/* WhatsApp Floating Button - Fixed to Right Side */}
        <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${initialMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
            aria-label="Contact us on WhatsApp"
          >
            {/* Tooltip Label */}
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 px-0 group-hover:px-4 py-2 rounded-full text-sm font-bold shadow-xl border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">
              Chat with us
            </span>
            
            {/* WhatsApp Icon Circle */}
            <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform duration-300 relative">
              <MessageCircle size={30} fill="currentColor" />
              
              {/* Pulse Effect Animation */}
              <div className="absolute inset-0 w-full h-full bg-[#25D366] rounded-full animate-ping opacity-25 -z-10"></div>
            </div>
          </a>
        </div>

        <Analytics />
      </body>
    </html>
  )
}