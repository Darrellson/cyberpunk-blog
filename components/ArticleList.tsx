'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ArticleList() {
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchArticles = async () => {
    setLoading(true)
    const res = await fetch('/api/articles')
    const data = await res.json()
    setArticles(data)
    setLoading(false)
  }

  const handleDelete = async (id: number) => {
    await fetch(`/api/articles/${id}`, { method: 'DELETE' })
    fetchArticles()
  }

  useEffect(() => {
    fetchArticles()
    const refresh = () => fetchArticles()
    window.addEventListener('article-created', refresh)
    return () => window.removeEventListener('article-created', refresh)
  }, [])

  return (
    <div className="mt-6">
      <h2 className="text-xl mb-4">Articles</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        articles.map((a) => (
          <div key={a.id} className="mb-4 p-4 border border-gray-300 rounded">
            <h3 className="font-bold">{a.title}</h3>
            <p>{a.content}</p>
            <Button className="mt-2" onClick={() => handleDelete(a.id)}>Delete</Button>
          </div>
        ))
      )}
    </div>
  )
}
