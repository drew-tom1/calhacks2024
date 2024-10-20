import { broadcastSSE } from './server-sent-events';

export default async function handler(req, res) {
  const body = await req.json(); // Parse JSON body
  const { gesture } = body;

  console.log('Gesture received:', gesture);

  switch (gesture) {
    case 'open_hand':
      console.log('Open hand detected, broadcasting event');
      broadcastSSE({ action: 'complete_task' });
      res.status(200).json({ message: 'Open hand gesture processed' });
      break;

    case 'fist':
      console.log('Fist detected, broadcasting event');
      broadcastSSE({ action: 'go_back_task' });
      res.status(200).json({ message: 'Fist gesture processed' });
      break;

    default:
      console.log('Unknown gesture');
      res.status(400).json({ error: 'Unknown gesture' });
  }
}
