import { supabase } from "./client";

export async function passwordSignIn(email: string, password: string) {
  const { user, error } = await supabase.auth.signIn({ email, password });
  return { userId: user?.id, error };
}

export async function oauthSignIn() {
  return supabase.auth.signIn({ provider: "github" });
}

export async function magicLinkSignIn(email: string) {
  return supabase.auth.signIn({ email });
}

export function currentSession() {
  const session = supabase.auth.session();
  return session?.access_token;
}

export function currentUser() {
  const user = supabase.auth.user();
  return user?.id;
}

export async function updateLegacyUser(name: string) {
  const { user, error } = await supabase.auth.update({ data: { name } });
  return { user, error };
}

export async function resetLegacyPassword(email: string) {
  return supabase.auth.api.resetPasswordForEmail(email);
}
