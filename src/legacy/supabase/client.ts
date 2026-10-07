import { createClient } from "@supabase/supabase-js";

// This client is a static scan fixture. No route imports or calls it.
export const supabase = createClient(
  process.env.SUPABASE_URL ?? "https://public-sandbox.invalid",
  process.env.SUPABASE_ANON_KEY ?? "public-sandbox-placeholder-never-use-real-keys",
  { auth: { persistSession: false } },
);
