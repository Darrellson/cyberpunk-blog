'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function JokeMicroblog() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchJoke = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/joke')
      const data = await res.json()
      setJoke(data.joke)
    } catch {
      setJoke('Failed to load joke.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <motion.div
      className="p-4 border border-cyberpunk-secondary rounded-xl bg-white dark:bg-black text-black dark:text-white mt-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
    >
      <h3 className="text-lg font-bold text-cyberpunk-primary">Microblog Joke</h3>
      <p className="mt-2 text-sm">{loading ? 'Loading joke...' : joke}</p>
      <button
        onClick={fetchJoke}
        className="mt-4 py-2 px-4 rounded-lg bg-cyberpunk-accent text-red font-semibold hover:bg-cyberpunk-button-hover-bg transition-all"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'New Joke'}
      </button>
    </motion.div>
  )
}
