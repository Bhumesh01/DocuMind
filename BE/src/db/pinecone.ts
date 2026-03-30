import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from "dotenv";

dotenv.config();
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
console.log(PINECONE_API_KEY)
const pc = new Pinecone({
  apiKey: PINECONE_API_KEY!,
});

const index = pc.index("documind"); 

export default async function insertChunks(chunks: string[]){
  try {
    await index.upsertRecords({
      records: chunks.map((chunk, i) => ({
        _id: `chunk-${i}`,
        text: chunk,
      })),
    });
  } catch (err) {
    console.error(err);
  }
}