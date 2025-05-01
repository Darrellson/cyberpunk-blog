'use client';
import { useState } from 'react';
import Article from '@/components/Article';
import JokeMicroblog from '@/components/JokeMicroblog';
import MediaGallery from '@/components/MediaGallery';
import ThemeSwitcher from '@/components/ThemeSwitcher'; 

export default function HomePage() {
  // State to manage the visibility of the admin panel
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Toggle the visibility of the admin panel
  const toggleAdminPanel = () => {
    setIsAdminOpen(!isAdminOpen);
  };

  return (
    <>
      <h1 className="text-3xl text-cyberpunk-primary mb-4">Cyberpunk Blog</h1>
      <Article />
      <MediaGallery />
      <JokeMicroblog />

      {/* Button to toggle the admin panel */}
      <div className="mt-6">
        <button
          onClick={toggleAdminPanel}
          className="bg-cyberpunk-primary text-white py-2 px-4 rounded-lg hover:bg-cyberpunk-secondary"
        >
          {isAdminOpen ? 'Close Admin Panel' : 'Open Admin Panel'}
        </button>
      </div>

      {/* Conditionally render the admin panel */}
      {isAdminOpen && (
        <div className="mt-6 p-6 border border-cyberpunk-primary rounded-lg bg-black">
          <h2 className="text-xl text-cyberpunk-primary mb-4">Admin Panel</h2>
          <ThemeSwitcher />
        </div>
      )}
    </>
  );
}
