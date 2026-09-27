import { ScenarioCard } from "@/components/scenario-card";
import { scenarios } from "@/lib/scenarios";

export default function SupabasePage() {
  const supabase = scenarios.filter((scenario) => scenario.provider === "supabase");
  return (
    <main className="shell innerPage">
      <span className="eyebrow">SUPABASE V1 FIXTURES</span>
      <h1>Supabase compatibility lab</h1>
      <p className="lede">
        These v1 call sites exercise documented v1-to-v2 changes. Scan results depend on the Supabase rules
        currently enabled in Shimpilot; the simulation makes no provider request.
      </p>
      <div className="grid">{supabase.map((scenario) => <ScenarioCard key={scenario.id} scenario={scenario} />)}</div>
    </main>
  );
}
