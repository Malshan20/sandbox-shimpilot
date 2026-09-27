import { scenarios } from "@/lib/scenarios";

export default function ArchitecturePage() {
  return (
    <main className="shell innerPage prosePage">
      <span className="eyebrow">ARCHITECTURE</span>
      <h1>Built to be safely broken.</h1>
      <p className="lede">The UI and API routes are fully functional, but the provider calls are simulated. Legacy provider integrations live as real TypeScript fixtures so Shimpilot has a realistic repository to inspect and patch.</p>
      <div className="architectureGrid">
        <section><h2>Frontend</h2><p>Next.js App Router pages, scenario explorer, and interactive simulation actions.</p></section>
        <section><h2>Backend</h2><p>Next.js route handlers return deterministic mock responses. No provider credentials are required.</p></section>
        <section><h2>Legacy fixtures</h2><p>Actual Stripe, OpenAI and Supabase imports and call shapes sit under <code>src/legacy</code>. These files are intentionally outdated.</p></section>
        <section><h2>Safety</h2><p>Never put real secrets in this repository. It is designed to be public, forked, modified and discarded.</p></section>
      </div>
      <h2 className="matrixTitle">Expected scan surface</h2>
      <div className="matrix">
        {scenarios.map((scenario) => (
          <div key={scenario.id} className="matrixRow">
            <span>{scenario.provider}</span><b>{scenario.title}</b><code>{scenario.file}</code><em>{scenario.severity}</em>
          </div>
        ))}
      </div>
    </main>
  );
}
