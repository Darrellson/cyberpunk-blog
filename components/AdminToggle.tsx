'use client'

import { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminToggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-6">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-cyberpunk-primary text-white hover:bg-cyberpunk-secondary"
      >
        {isOpen ? 'Close Admin Panel' : 'Open Admin Panel'}
      </Button>

      {isOpen && (
        <Card className="mt-4 border-cyberpunk-primary bg-black text-white">
          <CardHeader>
            <CardTitle className="text-cyberpunk-primary">Admin Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <ThemeSwitcher />
          </CardContent>
        </Card>
      )}
    </div>
  )
}
