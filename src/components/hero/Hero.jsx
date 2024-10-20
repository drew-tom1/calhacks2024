
'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-gradient-to-tr from-orange-500 to-red-400 relative h-screen w-screen">
      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        <div className="space-y-8">
        <Image
            src="/images/logo.png" 
            alt="Cooking Becoming Easy Logo"
            width={200}   
            height={100} 
            className="mx-auto"
          />
          <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
            Cooking Becoming Easy
          </p>
          <form className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center">
            <input
              type="email"
              className="border border-r-0 border-palette-light rounded-l-lg w-2/3 focus:outline-none focus:ring-1 focus:ring-palette-primary"
              required
              placeholder="Type Your Prompt"
            />
            <button
              type="submit"
              className="py-3 px-4 bg-palette-primary hover:bg-palette-dark text-black text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-palette-primary"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
