'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { motion, AnimatePresence } from 'framer-motion'

const themes = ['light', 'dark', 'cyberpunk', 'retro', 'neon']

export default function AdminPanel() {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'dark'
    setTheme(stored)
    document.body.classList.remove('light', 'dark', 'cyberpunk', 'retro', 'neon')
    document.body.classList.add(stored)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.body.classList.remove('light', 'dark', 'cyberpunk', 'retro', 'neon')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const resetTheme = () => {
    setTheme('dark')
    localStorage.removeItem('theme')
  }

  if (!mounted) return null

  return (
    <motion.div
      key="admin-panel"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cyberpunk-background py-4 px-8 shadow-md"
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl text-white font-bold">Admin Panel</div>
        <div className="flex gap-4">
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="bg-cyberpunk-accent border-cyberpunk-primary text-white py-2 px-4 rounded-lg shadow-lg">
              <SelectValue placeholder="Select Theme" />
            </SelectTrigger>
            <SelectContent>
              {themes.map(t => (
                <SelectItem key={t} value={t} className="capitalize">
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            onClick={resetTheme}
            className="bg-cyberpunk-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-cyberpunk-secondary transition-all"
          >
            Reset to Default
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
