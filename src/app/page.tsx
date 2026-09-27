import Link from "next/link";
import { ScenarioCard } from "@/components/scenario-card";
import { scenarios } from "@/lib/scenarios";

export default function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <div className="eyebrow">PUBLIC TRUST SANDBOX · INTENTIONALLY OUTDATED</div>
        <h1>Break this repo.<br/><span>Then let Shimpilot fix it.</span></h1>
        <p className="heroCopy">
          A Next.js compatibility lab containing deliberately legacy Stripe, OpenAI and Supabase integrations.
          Clone it, scan it, generate migrations, validate the result, and inspect the Draft PR before you ever connect production code.
        </p>
        <div className="heroActions">
          <a className="primary" href="https://shimpilot.com" target="_blank" rel="noreferrer">Test with Shimpilot ↗</a>
          <Link className="secondary" href="/architecture">See what is intentionally broken</Link>
        </div>
        <div className="warning">
          <strong>Safe by default:</strong> this demo never makes real Stripe, OpenAI or Supabase requests and should never contain real secrets.
        </div>
      </section>

      <section className="shell metrics">
        <div><b>{scenarios.length}</b><span>test scenarios</span></div>
        <div><b>3</b><span>providers</span></div>
        <div><b>0</b><span>real API calls</span></div>
        <div><b>1</b><span>public repo to trust first</span></div>
      </section>

      <section className="shell section">
        <div className="sectionHeading">
          <div>
            <span className="eyebrow">SCENARIO MATRIX</span>
            <h2>Real code shapes. Deliberate compatibility debt.</h2>
          </div>
          <p>Each card maps to source code in the public repository. The button only exercises the local mock backend; Shimpilot should inspect the actual legacy files.</p>
        </div>
        <div className="grid">
          {["stripe", "openai", "supabase"].map((provider) => {
            const scenario = scenarios.find((item) => item.provider === provider);
            return scenario ? <ScenarioCard key={scenario.id} scenario={scenario} /> : null;
          })}
        </div>
      </section>

      <section className="shell trustSection">
        <div className="trustPanel">
          <span className="eyebrow">THE TRUST FLOW</span>
          <h2>See the entire migration lifecycle on code that is designed to be disposable.</h2>
          <ol>
            <li><span>01</span>Fork or clone this public repository.</li>
            <li><span>02</span>Run a public scan or connect the repo to Shimpilot.</li>
            <li><span>03</span>Inspect findings and exact call sites.</li>
            <li><span>04</span>Generate a migration against the intentionally outdated code.</li>
            <li><span>05</span>Watch validation block incomplete fixes.</li>
            <li><span>06</span>Inspect the resulting Draft PR before trusting Shimpilot with real code.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
