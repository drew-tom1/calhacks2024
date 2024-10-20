import { NextRequest, NextResponse } from 'next/server';

// API route to handle IFTTT webhook requests
export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the JSON body from IFTTT
    const userInput = body.userInput; // Extract the user's input from the request

    // Log the user input for debugging
    console.log('IFTTT Webhook Received Input:', userInput);

    // Return a success response (IFTTT does not expect a response body)
    return NextResponse.json({ message: 'Webhook processed successfully' });
  } catch (error) {
    console.error('Error processing IFTTT webhook request:', error);
    return NextResponse.json(
      { message: 'Error processing request' },
      { status: 500 }
    );
  }
}
