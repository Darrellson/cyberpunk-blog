'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'

export default function AdminPanel() {
  const { theme, setTheme, resetTheme } = useTheme()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleCreate = async () => {
    if (!title || !content) {
      alert('Please fill in both title and content!')
      return
    }

    const response = await fetch('/api/articles/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })

    const data = await response.json()
    if (response.ok) {
      alert('Article created successfully!')
      setTitle('')
      setContent('')
    } else {
      alert(`Error: ${data.error}`)
    }
  }

  // Types for theme options
  const themes: ('light' | 'dark' | 'cyberpunk' | 'retro' | 'neon')[] = ['light', 'dark', 'cyberpunk', 'retro', 'neon']

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'light' | 'dark' | 'cyberpunk' | 'retro' | 'neon')
  }

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
          {/* Theme Selector */}
          <select
            value={theme}
            onChange={handleThemeChange}
            className="bg-cyberpunk-accent border-cyberpunk-primary text-white py-2 px-4 rounded-lg shadow-lg"
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <Button
            onClick={resetTheme}
            className="bg-cyberpunk-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-cyberpunk-secondary transition-all"
          >
            Reset to Default
          </Button>
        </div>
      </div>

      {/* Article Creation Form */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Create New Article</h2>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4"
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleCreate} className="bg-cyberpunk-primary text-white">
          Create Article
        </Button>
      </div>
    </motion.div>
  )
}
