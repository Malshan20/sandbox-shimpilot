import { stripe } from "./client";

export async function createLegacyCheckout(priceId: string) {
  return stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: "http://localhost:3000/?checkout=success",
    cancel_url: "http://localhost:3000/?checkout=cancelled",
  });
}

export function verifyLegacyWebhook(rawBody: string | Buffer, signature: string) {
  return stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET ?? "whsec_public_sandbox_placeholder");
}
