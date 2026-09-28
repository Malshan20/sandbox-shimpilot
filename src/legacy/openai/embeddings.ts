import { legacyOpenAI } from "./client";

export async function legacyEmbedding(input: string) {
  return legacyOpenAI.embeddings.create({ model: "text-embedding-ada-002", input });
}
