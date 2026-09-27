import { stripe } from "./client";

export async function attachLegacySource(customerId: string, token: string) {
  return stripe.customers.createSource(customerId, { source: token });
}

export async function updateLegacyCustomerSource(customerId: string, token: string) {
  return stripe.customers.update(customerId, { source: token });
}
