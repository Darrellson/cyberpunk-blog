'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function Article() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Card className="my-6 border-cyberpunk-primary">
        <CardHeader>
          <CardTitle className="text-cyberpunk-primary text-xl">Welcome to the Cyber Blog</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-black dark:text-white">
          <p>Welcome to a deep dive into the pulsating heart of neon dreams, retro-future vibes, and data-driven rebellion.</p>
          <p>Whether you're navigating neon alleyways or customizing chrome implants, this blog is your gateway to all things cyber.</p>
          <p>We regularly feature interviews with digital artists, synthwave playlists, and curated gear for your next net-run.</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
