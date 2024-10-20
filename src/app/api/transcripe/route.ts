import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@deepgram/sdk';

export async function POST(req: NextRequest) {
  const deepgramApiKey = process.env.DEEPGRAM_API_KEY;

  if (!deepgramApiKey) {
    return NextResponse.json({ error: 'Deepgram API key is missing' }, { status: 500 });
  }

  const deepgram = createClient(deepgramApiKey);

  try {
    const audioBuffer = await req.arrayBuffer(); // Receive the audio blob as a buffer
    const audioData = Buffer.from(audioBuffer); // Convert to Buffer

    // Send the audio to Deepgram for transcription
    const transcriptionResponse = await deepgram.transcription.preRecorded(
      {
        buffer: audioData,
        mimetype: 'audio/wav', // WAV mimetype
      },
      {
        model: 'nova-2',
        smart_format: true,
      }
    );

    // Extract the transcribed text
    const transcribedText = transcriptionResponse.results.channels[0].alternatives[0].transcript;

    // Return the transcribed text to the frontend
    return NextResponse.json({ text: transcribedText });
  } catch (error) {
    console.error('Error with Deepgram API:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
