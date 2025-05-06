'use client'
import { useEffect, useState } from 'react'

export default function JokeMicroblog() {
  const [joke, setJoke] = useState('')

  useEffect(() => {
    fetch('/api/joke')
      .then(res => res.json())
      .then(data => setJoke(data.joke))
  }, [])

  return (
    <div className="p-4 border border-cyberpunk-secondary rounded-xl bg-black dark:bg-black light:bg-white text-black dark:text-white">
      <h3 className="text-lg font-bold">Microblog Joke</h3>
      <p className="mt-2 text-sm">{joke}</p>
    </div>
  )
}
