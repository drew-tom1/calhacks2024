import { SchemaType } from "@google/generative-ai";

export const taskSchema = {
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