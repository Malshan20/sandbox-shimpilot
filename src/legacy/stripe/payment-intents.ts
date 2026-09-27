import { stripe } from "./client";

export async function createLegacyPaymentIntent(amount: number) {
  return stripe.paymentIntents.create({
    amount,
    currency: "usd",
    payment_method_types: ["card"],
    description: "Compatibility lab PaymentIntent",
  });
}

export async function confirmLegacyPaymentIntent(paymentIntentId: string, paymentMethod: string) {
  return stripe.paymentIntents.confirm(paymentIntentId, { payment_method: paymentMethod });
}
