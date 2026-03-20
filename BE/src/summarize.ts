import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();
const api_key = process.env.GEMINI_API_KEY;

export default async function getSummary(path: string){
    if(!api_key){
        return "Error";
    }
    const ai = new GoogleGenAI({ apiKey: api_key });
    const fileBuffer = fs.readFileSync(path);
    const contents = [
        { 
            text: "Summarize this document in clean markdown format with headings, bullet points, and short paragraphs."
        },
        {
            inlineData: {
                mimeType: 'application/pdf',
                data: fileBuffer.toString("base64")
            }
        }
    ];

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contents
    });
    return response.text;
}
