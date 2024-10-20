import { NextRequest, NextResponse } from 'next/server';
import { broadcastSSE } from './server-sent-events';

// API route handler for gesture detection
export async function POST(req: NextRequest) {
  const body = await req.json(); // Parse JSON body
  const { gesture } = body;

  console.log('Gesture received:', gesture);

  switch (gesture) {
    case 'open_hand':
      console.log('Open hand detected, broadcasting event');
      broadcastSSE({ action: 'complete_task' });
      return NextResponse.json({ message: 'Open hand gesture processed' });

    case 'fist':
      console.log('Fist detected, broadcasting event');
      broadcastSSE({ action: 'go_back_task' });
      return NextResponse.json({ message: 'Fist gesture processed' });

    default:
      console.log('Unknown gesture');
      return NextResponse.json({ error: 'Unknown gesture' }, { status: 400 });
  }
}
