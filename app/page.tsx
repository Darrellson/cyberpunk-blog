import Article from '@/components/Article'
import JokeMicroblog from '@/components/JokeMicroblog'
import MediaGallery from '@/components/MediaGallery'
import AdminToggle from '@/components/AdminToggle'

export const revalidate = 60

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl text-cyberpunk-primary mb-4">Cyberpunk Blog</h1>
      <Article />
      <MediaGallery />
      <JokeMicroblog />
      <AdminToggle />
    </>
  )
}
