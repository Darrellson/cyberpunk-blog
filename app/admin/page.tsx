import AdminPanel from '@/components/AdminToggle'
import Article from '@/components/Article' 
import ArticleList from '@/components/ArticleList'

export default function AdminPage() {
  return (
    <div className="pt-32">
      <h1 className="text-3xl text-cyberpunk-primary font-semibold p-6">Admin Dashboard</h1>
      <AdminPanel />

      {/* Renders the welcome section */}
      <Article />

      {/* Renders the list of added articles below */}
      <ArticleList />
    </div>
  )
}
