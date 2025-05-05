'use client'
import { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'

export default function AdminToggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-cyberpunk-primary text-white py-2 px-4 rounded-lg hover:bg-cyberpunk-secondary"
      >
        {isOpen ? 'Close Admin Panel' : 'Open Admin Panel'}
      </button>
      {isOpen && (
        <div className="mt-4 p-6 border border-cyberpunk-primary rounded-lg bg-black">
          <h2 className="text-xl text-cyberpunk-primary mb-4">Admin Panel</h2>
          <ThemeSwitcher />
        </div>
      )}
    </div>
  )
}
