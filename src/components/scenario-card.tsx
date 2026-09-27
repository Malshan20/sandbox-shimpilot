"use client";

import { useState } from "react";
import type { Scenario } from "@/lib/scenarios";

export function ScenarioCard({ scenario }: { scenario: Scenario }) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function run() {
    setState("loading");
    setMessage("");
    try {
      const response = await fetch(`/api/simulate/${scenario.provider}/${scenario.id}`, { method: "POST" });
      const data = (await response.json()) as { expectedSignal?: string; error?: string };
      if (!response.ok) throw new Error(data.error ?? "Simulation failed");
      setState("done");
      setMessage(data.expectedSignal ?? "Simulation complete");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Simulation failed");
    }
  }

  return (
    <article className="scenarioCard">
      <div className="scenarioTop">
        <span className={`providerBadge ${scenario.provider}`}>{scenario.provider}</span>
        <span className={`severity ${scenario.severity}`}>{scenario.severity}</span>
      </div>
      <h3>{scenario.title}</h3>
      <p>{scenario.summary}</p>
      <code>{scenario.file}</code>
      <button type="button" onClick={run} disabled={state === "loading"}>
        {state === "loading" ? "Running simulation…" : "Run backend simulation"}
      </button>
      {message ? <div className={`result ${state}`}>{message}</div> : null}
    </article>
  );
}
