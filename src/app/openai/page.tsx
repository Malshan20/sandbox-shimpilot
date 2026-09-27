import { ScenarioCard } from "@/components/scenario-card";
import { scenarios } from "@/lib/scenarios";

export default function OpenAIPage() {
  const openai = scenarios.filter((scenario) => scenario.provider === "openai");
  return (
    <main className="shell innerPage">
      <span className="eyebrow">OPENAI LEGACY FIXTURES</span>
      <h1>OpenAI compatibility lab</h1>
      <p className="lede">Old SDK v3 patterns and legacy model identifiers exist here specifically so Shimpilot can detect, explain and migrate them.</p>
      <div className="grid">{openai.map((scenario) => <ScenarioCard key={scenario.id} scenario={scenario} />)}</div>
    </main>
  );
}
