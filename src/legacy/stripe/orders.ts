import { stripe } from "./client";

export async function createLegacyOrder(customerId: string, skuId: string) {
  // @ts-ignore Legacy Orders are absent from the installed Stripe type surface; this is a scan-only fixture.
  return stripe.orders.create({ customer: customerId, currency: "usd", items: [{ type: "sku", parent: skuId }] });
}
