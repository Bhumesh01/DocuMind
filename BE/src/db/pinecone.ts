import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from "dotenv";

dotenv.config();
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
console.log(PINECONE_API_KEY)
const pc = new Pinecone({
  apiKey: PINECONE_API_KEY!,
});

const index = pc.index("documind"); 

const dummyVector = Array(1024).fill(0.5);

await index.upsert({
  records: [
    {
      id: 'test',
      values: dummyVector, 
      metadata: {
      text: "This is a test chunk",
    },
    },
  ],
});

const result = await index.query({
  vector: dummyVector,
  topK: 3,
  includeMetadata: true,
});

console.log(result);