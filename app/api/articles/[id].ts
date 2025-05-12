import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const { title, content } = req.body

  try {
    const updatedArticle = await prisma.article.update({
      where: { id: Number(id) },
      data: { title, content },
    })
    res.status(200).json(updatedArticle)
  } catch (error) {
    res.status(500).json({ error: 'Error updating article' })
  }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  try {
    const deletedArticle = await prisma.article.delete({
      where: { id: Number(id) },
    })
    res.status(200).json(deletedArticle)
  } catch (error) {
    res.status(500).json({ error: 'Error deleting article' })
  }
}
