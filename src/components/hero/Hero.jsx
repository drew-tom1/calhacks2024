
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import generateTasks from '@/app/api/generation/route';

export default function Hero() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await generateTasks(prompt)
    console.log(response)
  };

  return (
    <div className="bg-gradient-to-tr from-orange-500 to-red-400 relative h-screen w-screen">
      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        <div className="space-y-8">
        <Image
            src="/images/logo.png" 
            alt="Cooking Becoming Easy Logo"
            width={400}   
            height={200} 
            className="mx-auto"
          />
          <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
            Cooking Becoming Easy
          </p>
          <form onSubmit={handleSubmit} className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center">
            <input
                type="text"
                className="border border-r-0 border-palette-light rounded-l-lg w-2/3 focus:outline-none focus:ring-1 focus:ring-palette-primary text-black text-center"
                required
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type Your Prompt"
            />
            <button
              type="submit"
              className="py-3 px-4 bg-palette-primary hover:bg-palette-dark text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-palette-primary border border-white"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
