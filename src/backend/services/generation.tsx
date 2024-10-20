import { GoogleGenerativeAI } from "@google/generative-ai";
import { taskSchema } from "../models/taskSchema";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_API_KEY || ""

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY)

export default async function generateTasks(input: string) {
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: taskSchema,
        },
    });

    const result = await model.generateContent(input);
    const response = await result.response.text()
    return response
      
}