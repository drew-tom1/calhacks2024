import { NextRequest, NextResponse } from 'next/server';

// API route handler for gesture detection
export async function POST(req: NextRequest) {
  const body = await req.json(); // Parse JSON body
  const { gesture, taskId } = body;

  console.log('Gesture route hit');

  // Handle gesture types
  switch (gesture) {
    case 'swipe':
        console.log('Swipe gesture detected');
        return NextResponse.json({ message: 'Swipe detected!' });

    case 'open_hand':
        console.log('Open hand gesture detected');
        return NextResponse.json({ message: 'Open hand detected!', taskId });

    case 'fist':
        console.log('Fist detected');
        return NextResponse.json({ message: 'Fist detected!' });

    default:
        console.log('Unknown gesture type');
        return NextResponse.json({ error: 'Unknown gesture type' }, { status: 400 });
  }
}
