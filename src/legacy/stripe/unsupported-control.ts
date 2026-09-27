import { stripe } from "./client";

// Deliberate coverage control. Historically this call was outside Shimpilot's focused symbol registry.
export async function listLegacyCharges() {
  return stripe.charges.list({ limit: 10 });
}
