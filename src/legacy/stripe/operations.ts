import { stripe } from "./client";

export async function refundPayment(paymentIntent: string) {
  return stripe.refunds.create({ payment_intent: paymentIntent });
}

export async function readBalance() {
  return stripe.balance.retrieve();
}

export async function processTerminalPayment(readerId: string, paymentIntentId: string) {
  return stripe.terminal.readers.processPaymentIntent(readerId, { payment_intent: paymentIntentId });
}
