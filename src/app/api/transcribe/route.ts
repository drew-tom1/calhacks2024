// src/app/api/transcribe/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Deepgram } from '@deepgram/sdk';

export async function POST(req: NextRequest) {
  const deepgramApiKey = process.env.DEEPGRAM_API_KEY;

  if (!deepgramApiKey) {
    console.error('Deepgram API key is missing');
    return NextResponse.json({ error: 'Deepgram API key is missing' }, { status: 500 });
  }

  const deepgram = new Deepgram(deepgramApiKey);

  try {
    const audioBuffer = await req.arrayBuffer(); // Get the audio data as ArrayBuffer
    const audioData = Buffer.from(audioBuffer);  // Convert ArrayBuffer to Buffer

    // Send the audio file to Deepgram for transcription
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
      audioData,
      {
        model: 'nova-2',  // Ensure you are using a supported model
        mimetype: 'audio/wav',  // Correct MIME type
        smart_format: true,  // Enable smart formatting
      }
    );

    if (error) {
      console.error('Deepgram API Error:', error);
      throw error;  // Throw the error to trigger catch block
    }

    // Extract the transcription from the Deepgram response
    const transcribedText = result.results?.channels?.[0]?.alternatives?.[0]?.transcript || 'No transcription available';

    console.log('Transcription success:', transcribedText);

    return NextResponse.json({ text: transcribedText });
  } catch (error) {
    console.error('Error with Deepgram API:', error);  // Log detailed error for debugging
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
