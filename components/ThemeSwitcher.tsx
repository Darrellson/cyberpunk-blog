'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const themes = ['light', 'dark', 'cyberpunk'] as const

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('cyberpunk')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'cyberpunk'
    setTheme(stored)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.body.classList.remove('light', 'dark', 'cyberpunk')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  if (!mounted) return null

  const nextTheme = themes[(themes.indexOf(theme as any) + 1) % themes.length]

  return (
    <Button
      onClick={() => setTheme(nextTheme)}
      className="bg-cyberpunk-accent text-white hover:bg-cyberpunk-button-hover-bg"
    >
      Switch to {nextTheme} Mode
    </Button>
  )
}
