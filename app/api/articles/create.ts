import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { title, content } = req.body

  try {
    const article = await prisma.article.create({
      data: { title, content },
    })
    res.status(201).json(article)
  } catch (error) {
    res.status(500).json({ error: 'Error creating article' })
  }
}
