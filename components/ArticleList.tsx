'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ArticleList() {
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    const response = await fetch('/api/articles')
    const data = await response.json()
    setArticles(data)
  }

  useEffect(() => {
    fetchArticles()

    const handleArticleCreated = () => {
      fetchArticles()
    }

    // Listen to 'article-created' event
    window.addEventListener('article-created', handleArticleCreated)

    return () => {
      window.removeEventListener('article-created', handleArticleCreated)
    }
  }, [])

  const handleDelete = async (id: number) => {
    const response = await fetch(`/api/articles/${id}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    console.log('Deleted article:', data)
    fetchArticles() // Refresh after delete
  }

  return (
    <div className="my-6">
      <h2 className="text-xl">Articles</h2>
      <div>
        {articles.map((article: any) => (
          <div key={article.id} className="mb-4 p-4 border border-gray-300">
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <Button onClick={() => handleDelete(article.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
