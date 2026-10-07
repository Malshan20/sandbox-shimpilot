import { supabase } from "./client";

export async function passwordSignIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { userId: data.user?.id, error };
}

export async function oauthSignIn() {
  return supabase.auth.signInWithOAuth({ provider: "github" });
}

export async function magicLinkSignIn(email: string) {
  return supabase.auth.signInWithOtp({ email });
}

export async function currentSession() {
  const { data } = await supabase.auth.getSession();
  return data.session?.access_token;
}

export async function currentUser() {
  const { data } = await supabase.auth.getUser();
  return data.user?.id;
}

export async function updateLegacyUser(name: string) {
  const { data, error } = await supabase.auth.updateUser({ data: { name } });
  return { user: data.user, error };
}

export async function resetLegacyPassword(email: string) {
  return supabase.auth.resetPasswordForEmail(email);
}
