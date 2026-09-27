import { supabase } from "./client";

// In v1 these mutations return rows by default. v2 needs .select() to preserve that behavior.
export async function insertAndRead(title: string) {
  const { data, error } = await supabase.from("sandbox_tasks").insert({ title });
  return { insertedId: data?.[0]?.id, error };
}

export async function updateAndRead(id: string, title: string) {
  const { data, error } = await supabase.from("sandbox_tasks").update({ title }).eq("id", id);
  return { updatedTitle: data?.[0]?.title, error };
}

export async function upsertAndRead(id: string, title: string) {
  const { data, error } = await supabase.from("sandbox_tasks").upsert({ id, title });
  return { savedId: data?.[0]?.id, error };
}

export async function deleteAndRead(id: string) {
  const { data, error } = await supabase.from("sandbox_tasks").delete().eq("id", id);
  return { deletedId: data?.[0]?.id, error };
}
