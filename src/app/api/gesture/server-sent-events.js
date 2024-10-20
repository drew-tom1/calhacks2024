import { NextApiResponse } from 'next';

// In-memory list of connected clients (for simplicity)
let clients = [];

// API route to subscribe to real-time updates
export default async function handler(req, res) {
  // Keep the connection open to send data
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // Add the new client to the list
  clients.push(res);

  // When the connection closes, remove the client from the list
  req.on('close', () => {
    clients = clients.filter((client) => client !== res);
  });
}

// Function to broadcast messages to all clients
export function broadcastSSE(data) {
  clients.forEach((client) => {
    client.write(`data: ${JSON.stringify(data)}\n\n`);
  });
}
