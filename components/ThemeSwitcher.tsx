'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light'
    setTheme(stored)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  if (!mounted) return null

  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="bg-cyberpunk-accent text-white hover:bg-cyberpunk-button-hover-bg"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  )
}
