'use client';

import React, { useState } from 'react';
import InputBox from './inputBox';
import SubmitButton from './generateButton';

const GenerationWrapper = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center">
      <InputBox prompt={prompt} setPrompt={setPrompt} />
      <SubmitButton prompt={prompt} />
    </div>
  );
};

export default GenerationWrapper;
