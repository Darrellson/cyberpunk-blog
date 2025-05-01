'use client';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-2xl mb-4 text-cyberpunk-primary">Admin Panel</h1>
      <ThemeSwitcher />
    </div>
  );
}
