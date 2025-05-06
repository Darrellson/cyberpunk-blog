import AdminPanel from '@/components/AdminToggle'

export default function AdminPage() {
  return (
    <div className="pt-16">
      {/* This adds space for the navbar */}
      <h1 className="text-3xl text-cyberpunk-primary font-semibold p-6">Admin Dashboard</h1>
      <AdminPanel />
    </div>
  )
}
