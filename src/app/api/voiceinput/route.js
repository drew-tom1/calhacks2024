// pages/api/voice-input.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const { queryResult } = req.body; // Get the user's voice input from Google Assistant
    const userInput = queryResult.queryText; // Extract the voice command (e.g., "I have frozen veggies and want to make stir fry")

    // Process the input (you can send this to the frontend to populate the form)
    console.log("User said:", userInput);

    // Respond to Google Assistant
    res.status(200).json({
      fulfillmentText: "Got it!",
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
