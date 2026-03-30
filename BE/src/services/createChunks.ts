import { PDFParse } from "pdf-parse";
import path from "path";
import { cleanText, splitIntoSentences } from "./cleanText.js";

export default async function createChunks(filename: string, maxLength = 500, overlap = 100) {
    try{
        const filepath = path.join(process.cwd(), "uploads", filename);
        const parser = new PDFParse({ url: filepath });
	    const result = await parser.getText();
	    const cleanedText = cleanText(result.text);
        const sentences = splitIntoSentences(cleanedText);
        const chunks: string[] = [];
        let currentChunk = "";

        for (const sentence of sentences) {
          if ((currentChunk + sentence).length <= maxLength) {
            currentChunk += sentence + " ";
          } else {
            chunks.push(currentChunk.trim());
            currentChunk = currentChunk.slice(-overlap) + sentence + " ";
          }
        }
        if (currentChunk) {
          chunks.push(currentChunk.trim());
        }
        return chunks;
    }
    catch(err){
        console.log(err);
    }
}