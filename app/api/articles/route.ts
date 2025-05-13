import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Handle GET request to fetch all articles
export async function GET() {
  const articles = await prisma.article.findMany()
  return NextResponse.json(articles)
}

// Handle POST request to create a new article
export async function POST(req: NextRequest) {
  const { title, content } = await req.json()
  const article = await prisma.article.create({ data: { title, content } })
  return NextResponse.json(article, { status: 201 })
}
