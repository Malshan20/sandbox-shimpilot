import { supabase } from "./client";

export function publicAvatarUrl(path: string) {
  const { publicURL, error } = supabase.storage.from("avatars").getPublicUrl(path);
  return { url: publicURL, error };
}
