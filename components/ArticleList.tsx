'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/context/ThemeContext'

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), { ssr: false })

type Article = {
  id: number
  title: string
  content: string
}

export default function ArticleList() {
  const { theme } = useTheme()
  const [articles, setArticles] = useState<Article[]>([])
  const [selected, setSelected] = useState<Article | null>(null)

  const fetchArticles = async () => {
    const res = await fetch('/api/articles')
    const data = await res.json()
    setArticles(data)
  }

  useEffect(() => {
    fetchArticles()
    const handler = () => fetchArticles()
    window.addEventListener('article-created', handler)
    return () => window.removeEventListener('article-created', handler)
  }, [])

  const handleDelete = async (id: number) => {
    await fetch(`/api/articles/${id}`, { method: 'DELETE' })
    await fetch(`/api/revalidate?secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`)
    fetchArticles()
  }

  // Example theme-based background colors (adjust to your CSS variables or Tailwind classes)
  const bgClasses: Record<string, string> = {
    light: 'bg-white text-black',
    dark: 'bg-gray-900 text-white',
    cyberpunk: 'bg-cyberpunk-background text-cyberpunk-text',
    retro: 'bg-yellow-100 text-yellow-900',
    neon: 'bg-neon-background text-neon-text',
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Articles</h2>
      {articles.map((a) => (
        <div
          key={a.id}
          className={`mb-4 p-4 border rounded cursor-pointer ${bgClasses[theme] || 'bg-white text-black'}`}
        >
          <button
            onClick={() => setSelected(a)}
            className="text-left w-full hover:underline text-lg font-semibold"
          >
            {a.title}
          </button>
          <Button onClick={() => handleDelete(a.id)} className="mt-2">
            Delete
          </Button>
        </div>
      ))}

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
          <div
            className={`w-[90%] max-w-3xl max-h-[90vh] p-6 rounded-lg shadow-lg overflow-y-auto relative z-50 ${
              bgClasses[theme] || 'bg-white text-black'
            }`}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-3 text-red-500 hover:text-red-700 text-lg font-bold"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
            <MarkdownPreview source={selected.content} />
          </div>
        </div>
      )}
    </div>
  )
}
