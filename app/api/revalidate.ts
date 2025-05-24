import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = process.env.REVALIDATE_SECRET
  if (req.query.secret !== secret) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    // Revalidate homepage and admin page
    await res.revalidate('/')
    await res.revalidate('/admin')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
