import { supabase } from "./client";

export function publicAvatarUrl(path: string) {
  const { data: { publicUrl: publicURL } } = supabase.storage.from("avatars").getPublicUrl(path);
  return { url: publicURL, error: null };
}
