import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_API_KEY || ""

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY)

export default async function generateTasks(input: string) {
    const taskSchema = {
        description: "list of tasks",
        type: SchemaType.ARRAY,
        items: {
            type: SchemaType.OBJECT,
            properties: {
                taskName: {
                    type: SchemaType.STRING,
                    description: "Name of the task"
                },
                taskDescription: {
                    type: SchemaType.STRING,
                    description: "Description of the task"
                },
                stepNum: {
                    type: SchemaType.INTEGER,
                    description: "Step number in the list of tasks"
                },
            },
            required: ['taskName', 'taskDescription', 'stepNum'],
        },
    };
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: taskSchema,
        },
    });

    const result = await model.generateContent(input);
    const text = await result.response.text()
    return text
      
}