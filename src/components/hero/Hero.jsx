
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import generateTasks from '@/components/generation/taskGenerate';
import recordAudio from '@/utils/recordAudio'; 

export default function Hero() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await generateTasks(prompt)
    console.log(response)
  };

  // Function to handle voice input via microphone button
  const handleVoiceInput = async () => {
    try {
      const audioBlob = await recordAudio();  // Record audio using the Web Audio API
      const formData = new FormData();
      formData.append('audio', audioBlob);

      const res = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();  // Log the raw response to inspect it
      console.log('Response from API:', data);

      if (data.text) {
        setPrompt(data.text);  // Use transcribed text
        const response = await generateTasks(data.text);  // Send the transcribed text to the Gemini API
        setTasks(response);
      } else {
        console.error('Error in transcription response:', data.error);
      }
    } catch (err) {
      console.error('Error during voice input handling:', err);
    }
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
            <button
            className="mt-4 p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleVoiceInput}
          >
            🎤 Speak
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
