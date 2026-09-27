import { supabase } from "./client";

export function subscribeToTasks(onChange: (record: unknown) => void) {
  const subscription = supabase
    .from("sandbox_tasks")
    .on("*", (payload) => onChange(payload.new))
    .subscribe();

  return () => subscription.unsubscribe();
}
