# Scan scenario matrix

All paths below are real TypeScript fixtures. The site only simulates responses; inspect Shimpilot's actual finding evidence and subsequent validation separately. The installed versions are pinned in `package.json` and `package-lock.json`: Stripe 11.18.0, OpenAI 3.3.0, and Supabase JS 1.35.7.

| Provider | Call shape or behavior | Source | Scan expectation |
| --- | --- | --- | --- |
| Stripe | `charges.create`, `charges.capture` | `src/legacy/stripe/charges.ts` | Attribute each supported call to its line. |
| Stripe | `customers.createSource`, `customers.update` | `src/legacy/stripe/customers.ts` | Inspect source-token and update usage. |
| Stripe | `paymentIntents.create`, `paymentIntents.confirm` | `src/legacy/stripe/payment-intents.ts` | Inspect both PaymentIntent call sites. |
| Stripe | `subscriptions.create`, `subscriptions.update`, `invoices.pay` | `src/legacy/stripe/subscriptions.ts` | Inspect lifecycle call sites. |
| Stripe | `checkout.sessions.create`, `webhooks.constructEvent` | `src/legacy/stripe/checkout.ts` | Inspect Checkout and webhook calls. |
| Stripe | `refunds.create`, `balance.retrieve`, `terminal.readers.processPaymentIntent` | `src/legacy/stripe/operations.ts` | Inspect three less common calls. |
| Stripe | `orders.create` | `src/legacy/stripe/orders.ts` | Legacy Orders scan case; the pinned SDK does not type this resource, so this one line uses a TypeScript suppression. It is never executed. |
| Stripe | `charges.list` | `src/legacy/stripe/unsupported-control.ts` | Coverage control: do not equate an unrecognized call with a proven safe migration. |
| OpenAI | v3 `Configuration`, `OpenAIApi` | `src/legacy/openai/client.ts` | Inspect installed version and client constructor. |
| OpenAI | `createChatCompletion`, old model snapshot | `src/legacy/openai/chat.ts` | Attribute both SDK and model signals. |
| OpenAI | `createCompletion`, `text-davinci-003` | `src/legacy/openai/completions.ts` | Inspect completion and model migration evidence. |
| OpenAI | `createEmbedding`, `text-embedding-ada-002` | `src/legacy/openai/embeddings.ts` | Inspect embedding and model evidence. |
| Supabase | `createClient` v1 options | `src/legacy/supabase/client.ts` | Evaluate v1 configuration changes if a rule exists. |
| Supabase | `auth.signIn` password, OAuth, email-only | `src/legacy/supabase/auth.ts` | Different v2 replacements: password, OAuth, OTP; preserve returned data handling. |
| Supabase | `auth.session`, `auth.user`, `auth.update`, `auth.api.resetPasswordForEmail` | `src/legacy/supabase/auth.ts` | Inspect async methods, renamed methods and response shapes. |
| Supabase | `insert`, `update`, `upsert`, `delete` with returned rows | `src/legacy/supabase/database.ts` | Preserve returned rows with `.select()` when upgrading to v2. |
| Supabase | `from().on().subscribe()` and `unsubscribe()` | `src/legacy/supabase/realtime.ts` | Inspect migration to channels and channel cleanup. |
| Supabase | `storage.from().getPublicUrl()` `publicURL` result | `src/legacy/supabase/storage.ts` | Inspect v2 response shape if a rule exists. |

Supabase cases follow [Supabase's v1-to-v2 upgrade guide](https://supabase.com/docs/reference/javascript/v1/upgrade-guide). They prepare a test target for forthcoming Supabase rules; the template cannot establish Shimpilot support by itself.

## Evidence checklist

For each supported finding, verify provider and installed version, affected file and line, relevant upstream change, and the rule's actual eligibility. After a migration, check typecheck, build, targeted re-scan, Draft PR diff and CI. Merge only after review, then re-scan the branch to verify the finding has gone away and health reflects the new scan. Record unsupported cases as coverage gaps, not successful fixes.
