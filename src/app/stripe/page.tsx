import { ScenarioCard } from "@/components/scenario-card";
import { scenarios } from "@/lib/scenarios";

export default function StripePage() {
  const stripe = scenarios.filter((scenario) => scenario.provider === "stripe");
  return (
    <main className="shell innerPage">
      <span className="eyebrow">STRIPE LEGACY FIXTURES</span>
      <h1>Stripe compatibility lab</h1>
      <p className="lede">Focused test cases based on call shapes Shimpilot can map today, plus one deliberate unsupported-control case.</p>
      <div className="grid">{stripe.map((scenario) => <ScenarioCard key={scenario.id} scenario={scenario} />)}</div>
    </main>
  );
}
