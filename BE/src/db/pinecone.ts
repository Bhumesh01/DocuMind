import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from "dotenv";

dotenv.config();
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
// console.log(PINECONE_API_KEY)
const pc = new Pinecone({
  apiKey: PINECONE_API_KEY!,
});

const index = pc.index("documind"); 

export async function insertChunks(chunks: string[]){
  const BATCH_SIZE = 96;
  try {
    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
      const batch = chunks.slice(i, i + BATCH_SIZE);

      await index.upsertRecords({
        records: batch.map((chunk, j) => ({
          _id: `chunk-${i + j}`,
          text: chunk,
        })),
      });

      console.log(`Inserted batch ${i / BATCH_SIZE + 1}`);
    }
  } catch (err) {
    console.error(err);
  }
}

export async function searchText(query: string):Promise<string[]|undefined>{
  try{
    const response = await index.searchRecords({
      query: {
        topK: 2,
        inputs: { text:  query },
      },
    });

    const hits = response.result.hits;
    const extractedText = hits.map(hit => (hit.fields as { text: string }).text);
    console.log(extractedText);
    return extractedText;
  }
  catch(err){
    console.error(err);
  }
}