export type Provider = "stripe" | "openai" | "supabase";

export type Scenario = {
  id: string;
  provider: Provider;
  title: string;
  file: string;
  severity: "medium" | "high" | "control";
  summary: string;
  expectedSignal: string;
};

export const scenarios: Scenario[] = [
  {
    id: "legacy-charge",
    provider: "stripe",
    title: "Legacy Charges flow",
    file: "src/legacy/stripe/charges.ts",
    severity: "high",
    summary: "Uses charges.create + source token and charges.capture.",
    expectedSignal: "Supported Stripe call sites should be discovered and evaluated.",
  },
  {
    id: "customer-source",
    provider: "stripe",
    title: "Legacy customer source",
    file: "src/legacy/stripe/customers.ts",
    severity: "high",
    summary: "Uses customers.createSource and customers.update(source).",
    expectedSignal: "Customer source patterns should map back to exact files and functions.",
  },
  {
    id: "payment-intents",
    provider: "stripe",
    title: "PaymentIntent compatibility",
    file: "src/legacy/stripe/payment-intents.ts",
    severity: "high",
    summary: "Uses paymentIntents.create with explicit legacy payment_method_types and confirm.",
    expectedSignal: "Shimpilot should identify supported PaymentIntent usage and migration candidates.",
  },
  {
    id: "subscriptions",
    provider: "stripe",
    title: "Subscription lifecycle",
    file: "src/legacy/stripe/subscriptions.ts",
    severity: "medium",
    summary: "Uses subscriptions.create/update and invoices.pay.",
    expectedSignal: "Subscription and invoice call sites should be indexed.",
  },
  {
    id: "checkout-webhook",
    provider: "stripe",
    title: "Checkout + webhook",
    file: "src/legacy/stripe/checkout.ts",
    severity: "medium",
    summary: "Uses checkout.sessions.create and webhooks.constructEvent.",
    expectedSignal: "Checkout and webhook usage should be visible in the API map.",
  },
  {
    id: "refund-balance-terminal",
    provider: "stripe",
    title: "Refund, balance and Terminal",
    file: "src/legacy/stripe/operations.ts",
    severity: "medium",
    summary: "Uses refunds.create, balance.retrieve, and terminal.readers.processPaymentIntent.",
    expectedSignal: "Less common supported registry calls should still be found.",
  },
  {
    id: "legacy-order",
    provider: "stripe",
    title: "Legacy Orders flow",
    file: "src/legacy/stripe/orders.ts",
    severity: "high",
    summary: "Uses orders.create from the legacy Orders API.",
    expectedSignal: "The Orders call site should be indexed and evaluated against the supported Stripe rule.",
  },
  {
    id: "unsupported-control",
    provider: "stripe",
    title: "Coverage control: charges.list",
    file: "src/legacy/stripe/unsupported-control.ts",
    severity: "control",
    summary: "Contains charges.list as a deliberate unsupported-control case.",
    expectedSignal: "If your current registry does not support charges.list, it should remain unclassified rather than falsely marked safe.",
  },
  {
    id: "legacy-chat",
    provider: "openai",
    title: "OpenAI SDK v3 chat flow",
    file: "src/legacy/openai/chat.ts",
    severity: "high",
    summary: "Uses Configuration/OpenAIApi and createChatCompletion with an old model snapshot.",
    expectedSignal: "Legacy OpenAI SDK patterns should be detected and mapped to the exact call site.",
  },
  {
    id: "legacy-completion",
    provider: "openai",
    title: "Legacy text completion",
    file: "src/legacy/openai/completions.ts",
    severity: "high",
    summary: "Uses createCompletion with text-davinci-003.",
    expectedSignal: "Deprecated completion-style usage should be surfaced for migration review.",
  },
  {
    id: "legacy-embedding",
    provider: "openai",
    title: "Legacy embedding model",
    file: "src/legacy/openai/embeddings.ts",
    severity: "medium",
    summary: "Uses createEmbedding with text-embedding-ada-002.",
    expectedSignal: "Legacy embedding model usage should be discoverable and attributable.",
  },
  {
    id: "supabase-password-auth",
    provider: "supabase",
    title: "Supabase v1 password sign-in",
    file: "src/legacy/supabase/auth.ts",
    severity: "high",
    summary: "Uses auth.signIn({ email, password }) and the v1 user result shape.",
    expectedSignal: "A v1-to-v2 auth rule should identify the sign-in call and required result shape change.",
  },
  {
    id: "supabase-oauth-auth",
    provider: "supabase",
    title: "Supabase v1 OAuth and magic link",
    file: "src/legacy/supabase/auth.ts",
    severity: "high",
    summary: "Uses auth.signIn with provider and email-only arguments.",
    expectedSignal: "Distinct OAuth and OTP migrations should be attributed to their exact calls.",
  },
  {
    id: "supabase-session-user",
    provider: "supabase",
    title: "Synchronous session and user",
    file: "src/legacy/supabase/auth.ts",
    severity: "high",
    summary: "Uses v1 auth.session() and auth.user() and reads their results.",
    expectedSignal: "A v2 migration must handle asynchronous getSession/getUser and changed response shapes.",
  },
  {
    id: "supabase-auth-update",
    provider: "supabase",
    title: "Update user and password reset",
    file: "src/legacy/supabase/auth.ts",
    severity: "medium",
    summary: "Uses auth.update and auth.api.resetPasswordForEmail.",
    expectedSignal: "Changed auth method names and result shapes should be evaluated.",
  },
  {
    id: "supabase-mutation-results",
    provider: "supabase",
    title: "Database mutation results",
    file: "src/legacy/supabase/database.ts",
    severity: "high",
    summary: "Reads returned rows from insert, update, upsert and delete without select().",
    expectedSignal: "A v2 migration should preserve return-row behavior for each mutation.",
  },
  {
    id: "supabase-realtime",
    provider: "supabase",
    title: "Realtime v1 subscription",
    file: "src/legacy/supabase/realtime.ts",
    severity: "high",
    summary: "Uses from().on().subscribe() and unsubscribe().",
    expectedSignal: "The v2 channel subscription and cleanup change should be discoverable.",
  },
  {
    id: "supabase-storage",
    provider: "supabase",
    title: "Storage v1 public URL",
    file: "src/legacy/supabase/storage.ts",
    severity: "medium",
    summary: "Uses the v1 publicURL response property.",
    expectedSignal: "A storage response-shape rule should identify the URL access.",
  }
];

export function getScenario(provider: string, id: string): Scenario | undefined {
  return scenarios.find((scenario) => scenario.provider === provider && scenario.id === id);
}
