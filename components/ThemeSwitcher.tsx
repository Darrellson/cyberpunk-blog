'use client'

import { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>('light')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Only run after client has mounted
    const storedTheme = localStorage.getItem('theme') || 'light'
    setTheme(storedTheme)
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, isMounted])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!isMounted) return null // Optional: prevent SSR mismatch

  return (
    <button
      onClick={toggleTheme}
      className="py-2 px-4 rounded-lg bg-cyberpunk-accent text-white font-semibold hover:bg-cyberpunk-button-hover-bg transition-all"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}
