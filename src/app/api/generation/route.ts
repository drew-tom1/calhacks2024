import { GoogleGenerativeAI } from "@google/generative-ai";
import { taskSchema } from "./taskSchema";
import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_API_KEY || ""

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY)

export async function POST(req: NextRequest) {
    try {
        const input = await req.json()
        const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: taskSchema,
        },
    });
    const result = await model.generateContent(input);
    const response = await result.response.text()
    return NextResponse.json(JSON.parse(response))
    } catch (error) {
        return NextResponse.json({ error: "Tasks cannot be generated"})
    }

    
      
}