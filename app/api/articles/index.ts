import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const articles = await prisma.article.findMany()
    res.status(200).json(articles)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching articles' })
  }
}
