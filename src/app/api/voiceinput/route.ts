import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body using NextRequest's .json() method
    const { queryResult } = await req.json();
    const userInput = queryResult.queryText; // Extract the user's voice command

    // Log the user's input to the server console (terminal)
    console.log("User said:", userInput);

    // Respond to Google Assistant
    return NextResponse.json({
      fulfillmentText: "Got it!",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
