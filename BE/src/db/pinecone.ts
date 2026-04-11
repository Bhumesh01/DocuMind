import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from "dotenv";

dotenv.config();
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
console.log(PINECONE_API_KEY)
const pc = new Pinecone({
  apiKey: PINECONE_API_KEY!,
});

const index = pc.index("documind"); 

export async function insertChunks(chunks: string[]){
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

export async function searchText(text: string):Promise<string[]|undefined>{
  try{
    const response = await index.searchRecords({
      query: {
        topK: 2,
        inputs: { text: text },
      },
    });

    const hits = response.result.hits;
    const extractedText = hits.map(hit => (hit.fields as { text: string }).text);
    return extractedText;
  }
  catch(err){

  }
}