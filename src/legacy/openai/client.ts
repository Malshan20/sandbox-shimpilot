import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY ?? "sk-public-sandbox-placeholder-never-use-real-secrets",
});

export const legacyOpenAI = new OpenAIApi(configuration);
