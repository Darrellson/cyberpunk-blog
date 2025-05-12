'use client'

import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/button'

const themes = ['light', 'dark', 'cyberpunk', 'retro', 'neon'] as const

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length]

  return (
    <Button
      onClick={() => setTheme(nextTheme)}
      className="bg-cyberpunk-accent text-white hover:bg-cyberpunk-button-hover-bg"
    >
      Switch to {nextTheme} Mode
    </Button>
  )
}
