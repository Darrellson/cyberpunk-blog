'use client'

import '@/styles/globals.css'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cyberpunk-background text-white">
        <ThemeProvider>
          <main className="max-w-4xl mx-auto p-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
