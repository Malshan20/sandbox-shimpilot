import { supabase } from "./client";

export function subscribeToTasks(onChange: (record: unknown) => void) {
  const subscription = supabase
    .channel("sandbox_tasks")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "sandbox_tasks" },
      (payload) => onChange(payload.new)
    )
    .subscribe();

  return () => supabase.removeChannel(subscription);
}
