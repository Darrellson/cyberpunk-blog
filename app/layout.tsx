'use client'

import '@/styles/globals.css'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('cyberpunk')

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'cyberpunk'
    setTheme(stored)
    document.body.classList.remove('light', 'dark', 'cyberpunk')
    document.body.classList.add(stored)
  }, [])

  return (
    <html lang="en">
      <body className={`${theme} bg-cyberpunk-background text-white`}>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
