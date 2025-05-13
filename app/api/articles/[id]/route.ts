import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { title, content } = await req.json()
  const updated = await prisma.article.update({
    where: { id: Number(params.id) },
    data: { title, content },
  })
  return NextResponse.json(updated)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const deleted = await prisma.article.delete({
    where: { id: Number(params.id) },
  })
  return NextResponse.json(deleted)
}
