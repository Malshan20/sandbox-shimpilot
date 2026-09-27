import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_shimpilot_public_sandbox_never_use_real_secrets", {
  apiVersion: "2022-11-15",
  typescript: true,
});
