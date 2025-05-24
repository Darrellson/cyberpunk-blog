'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

type Article = {
  id: number
  title: string
  content: string
}

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchArticles = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/articles')
      if (!res.ok) throw new Error('Failed to fetch articles')
      const data = await res.json()
      setArticles(data)
    } catch (err) {
      console.error('Error fetching articles:', err)
      setError('Could not load articles')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    await fetch(`/api/articles/${id}`, { method: 'DELETE' })
    await fetch(`/api/revalidate?secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`)
    fetchArticles()
  }

  useEffect(() => {
    fetchArticles()

    const handleArticleCreated = () => {
      console.log('Detected article-created event. Refreshing...')
      fetchArticles()
    }

    window.addEventListener('article-created', handleArticleCreated)

    return () => {
      window.removeEventListener('article-created', handleArticleCreated)
    }
  }, [])

  return (
    <div className="mt-6">
      <h2 className="text-xl mb-4">Articles</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && articles.length === 0 && <p>No articles found.</p>}

      {articles.map((a) => (
        <div key={a.id} className="mb-4 p-4 border border-gray-300 rounded">
          <h3 className="font-bold">{a.title}</h3>
          <p>{a.content}</p>
          <Button className="mt-2" onClick={() => handleDelete(a.id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  )
}
