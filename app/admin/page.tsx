import AdminPanel from '@/components/AdminToggle'
import ArticleList from '@/components/ArticleList'

export default function AdminPage() {
  return (
    <div className="pt-16">
      <h1 className="text-3xl text-cyberpunk-primary font-semibold p-6">Admin Dashboard</h1>
      <AdminPanel />
      <ArticleList />
    </div>
  )
}
