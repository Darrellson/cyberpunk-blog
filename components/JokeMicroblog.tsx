'use client';
import { useState, useEffect } from 'react';
import { jokes } from '@/lib/jokes';

export default function JokeMicroblog() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  }, []);

  return (
    <div className="p-4 border border-cyberpunk-secondary rounded-xl bg-black">
      <h3 className="text-lg font-bold">Microblog Joke</h3>
      <p className="mt-2 text-sm">{joke}</p>
    </div>
  );
}
