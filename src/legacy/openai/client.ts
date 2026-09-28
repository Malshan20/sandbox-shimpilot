import OpenAI from "openai";
export const legacyOpenAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? "sk-public-sandbox-placeholder-never-use-real-secrets",
});
