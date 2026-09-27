import { legacyOpenAI } from "./client";

export async function legacyChat(prompt: string) {
  return legacyOpenAI.createChatCompletion({
    model: "gpt-3.5-turbo-0301",
    messages: [
      { role: "system", content: "You are a compatibility lab assistant." },
      { role: "user", content: prompt },
    ],
  });
}
