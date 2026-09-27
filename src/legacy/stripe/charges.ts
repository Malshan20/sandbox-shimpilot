import { stripe } from "./client";

export async function createLegacyCharge(token: string, amount: number) {
  return stripe.charges.create({ amount, currency: "usd", source: token, description: "Legacy Charge Test" });
}

export async function captureLegacyCharge(chargeId: string, amount: number) {
  return stripe.charges.capture(chargeId, { amount });
}
