import { legacyOpenAI } from "./client";

export async function legacyCompletion(prompt: string) {
  return legacyOpenAI.completions.create({ model: "text-davinci-003", prompt, max_tokens: 120, temperature: 0.2 });
}
