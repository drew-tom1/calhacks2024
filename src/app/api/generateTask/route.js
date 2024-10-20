import { GoogleGenerativeAI } from "@google/generative-ai";
import { taskSchema } from "./taskSchema";  

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "";

if (!GOOGLE_API_KEY) {
  console.error("Google API Key is missing");
}

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

export async function POST(req) {
  const { input } = await req.json();

  if (!input) {
    return new Response(JSON.stringify({ message: "Input is required" }), { status: 400 });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: taskSchema,
      },
    });

    const result = await model.generateContent(input);
    const responseText = await result.response.text();
    console.log("Response Text:", responseText);
    return new Response(JSON.stringify({ content: responseText }), { status: 200 });

  } catch (error) {
    console.error("Error in generating tasks:", error);
    return new Response(JSON.stringify({ message: "Error generating content", error: error.message }), { status: 500 });
  }
}
