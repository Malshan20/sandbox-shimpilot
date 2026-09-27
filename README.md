# Shimpilot public sandbox

A disposable Next.js repository for testing how Shimpilot finds and migrates supported breaking API and SDK changes. It contains intentionally old Stripe, OpenAI and Supabase code. The site and its simulation API never call those providers.

## Run a scan

1. Create your own repository with **Use this template**, or use this repository's URL in Shimpilot's public scan.
2. Scan the repository in Shimpilot. Check the detected package versions, affected files and lines, rule evidence, findings and resulting health score. A simulated response on this site is **not** a Shimpilot scan result.
3. For a migration test, connect **only your disposable copy** to the GitHub App, choose Manual mode, inspect the proposed changes and validation, and review the Draft PR. Use a fresh copy or reset your branch for the next case.
4. After a merge, scan again. Confirm the supported finding is gone and check the updated health result. A merge alone is not proof that the issue was fixed.

Stripe and OpenAI fixtures exercise the existing scan surface. Supabase v1 fixtures are included to test Supabase support as rules become available; their presence does **not** mean Supabase scanning or automatic migrations are already supported by Shimpilot. A zero-finding result may mean a rule is unavailable. Automatic mode should be enabled only when the product explicitly supports the provider and all validation, CI, protection and impact gates pass.

See [SCENARIO_MATRIX.md](SCENARIO_MATRIX.md) for exact calls, source paths and what to check. These are representative, documented migration cases, not every function in each provider SDK. Shimpilot decides eligibility from its active rules; no finding or PR is guaranteed for an unsupported case.

## Boundaries

- The app's **Run backend simulation** buttons return static scenario metadata. They do not execute the legacy fixture functions or send provider requests.
- A public scan inspects supported source patterns. It does not install dependencies, run tests, create a branch or open a PR.
- The connected workflow may validate eligible migrations and open Draft PRs. Review the diff and CI before merging in Manual mode.
- Never commit real credentials. The `.env.example` entries are intentionally blank; the fixtures use placeholders and are never imported by the route handlers.
- A clean scan does not guarantee compatibility across all SDK calls. The `charges.list` control case deliberately checks that unsupported calls are not misrepresented as resolved findings.
- The repository's GitHub Actions workflow runs typecheck and build in your copy. Shimpilot worker-side command execution depends on its own configuration.

## Run locally

```bash
npm ci
npm run typecheck
npm run build
npm run dev
```

No provider credentials are needed. The source fixtures are static scan targets; only the local simulation routes run when a button is clicked.

MIT licensed. [Visit Shimpilot](https://shimpilot.com).
