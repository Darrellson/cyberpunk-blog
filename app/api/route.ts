import { jokes } from '@/lib/jokes'
import { NextResponse } from 'next/server'

export async function GET() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)]
  return NextResponse.json({ joke })
}
