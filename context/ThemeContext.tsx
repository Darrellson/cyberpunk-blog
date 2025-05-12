'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const themes = ['light', 'dark', 'cyberpunk', 'retro', 'neon'] as const
type Theme = typeof themes[number]

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resetTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('cyberpunk')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = (localStorage.getItem('theme') as Theme) || 'cyberpunk'
    setThemeState(stored)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.body.classList.remove(...themes)
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => setThemeState(newTheme)

  const resetTheme = () => {
    localStorage.removeItem('theme')
    setThemeState('cyberpunk')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resetTheme }}>
      {mounted && children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
