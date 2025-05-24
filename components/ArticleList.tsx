'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import ReactMarkdown from 'react-markdown'
import { X } from 'lucide-react' // optional icon for close

type Article = {
  id: number
  title: string
  content: string
}

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([])
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const fetchArticles = async () => {
    const res = await fetch('/api/articles')
    const data = await res.json()
    setArticles(data)
  }

  const handleDelete = async (id: number) => {
    await fetch(`/api/articles/${id}`, { method: 'DELETE' })
    await fetch(`/api/revalidate?secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`)
    fetchArticles()
  }

  useEffect(() => {
    fetchArticles()
    window.addEventListener('article-created', fetchArticles)
    return () => window.removeEventListener('article-created', fetchArticles)
  }, [])

  return (
    <div className="relative">
      <h2 className="text-xl mb-4">Articles</h2>
      {articles.map((a) => (
        <div key={a.id} className="mb-4 p-4 border border-gray-300 rounded bg-white shadow">
          <h3
            className="font-bold cursor-pointer hover:text-cyberpunk-accent text-lg"
            onClick={() => setSelectedArticle(a)}
          >
            {a.title}
          </h3>
          <Button className="mt-2" onClick={() => handleDelete(a.id)}>
            Delete
          </Button>
        </div>
      ))}

      {/* Fullscreen Preview */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-white p-8 overflow-y-auto shadow-lg rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">{selectedArticle.title}</h2>
            <Button variant="ghost" onClick={() => setSelectedArticle(null)}>
              <X className="w-6 h-6" />
            </Button>
          </div>
          <article className="prose max-w-full">
            <ReactMarkdown>{selectedArticle.content}</ReactMarkdown>
          </article>
        </div>
      )}
    </div>
  )
}
