import { stripe } from "./client";

export async function createLegacySubscription(customerId: string, priceId: string) {
  return stripe.subscriptions.create({ customer: customerId, items: [{ price: priceId }] });
}

export async function updateLegacySubscription(subscriptionId: string, itemId: string, priceId: string) {
  return stripe.subscriptions.update(subscriptionId, { items: [{ id: itemId, price: priceId }] });
}

export async function manuallyPayInvoice(invoiceId: string) {
  return stripe.invoices.pay(invoiceId);
}
