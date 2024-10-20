import { GoogleGenerativeAI } from "@google/generative-ai";
import { taskSchema } from "./taskSchema";  // Adjust the path to your schema
console.log(process.env)
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "";

if (!GOOGLE_API_KEY) {
  console.error("Google API Key is missing");  // Log if API key is missing
}

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

console.log(GOOGLE_API_KEY + "!");
// Export the named `POST` function
export async function POST(req) {
  try {
    const { input } = await req.json();  // Extract the input from the request body

    console.log("Received input:", input);  // Log the received input

    if (!input) {
      console.error("No input provided");
      return new Response(JSON.stringify({ message: "Input is required" }), { status: 400 });
    }

    // Log that we're creating the model
    console.log("Creating model...");

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: taskSchema,
      },
    });

    console.log("Model created successfully");

    const result = await model.generateContent(input);
    console.log("Generated content result:", result);

    const responseText = await result.response.text();
    console.log("Response Text:", responseText);

    return new Response(JSON.stringify({ content: responseText }), { status: 200 });

  } catch (error) {
    console.error("Error in generating tasks:", error);  // Log the error
    return new Response(JSON.stringify({ message: "Error generating content", error: error.message }), { status: 500 });
  }
}
