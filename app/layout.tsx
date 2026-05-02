import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: 'PythonX | Digital Growth Agency',
  description: 'Elevating ambitious brands through data-driven digital marketing and high-performance web architecture.',
}

import { Footer } from '@/components/footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

