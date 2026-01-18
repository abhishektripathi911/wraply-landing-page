# Working Agreements

These instructions apply to the entire repository.

## Core Principles
- Work in small, reviewable steps with frequent commits.
- Before coding new features, document architecture, data model, routes, and risks/assumptions.
- After each major step, run tests + lint and fix failures.
- Do not add unnecessary dependencies; prefer built-in solutions.
- Use environment variables and keep `.env.example` up to date.
- Enforce role-based access control server-side.
- Security: no secrets in client code.
- Provide seed/demo data where appropriate.
- Keep UI professional and “insurance-grade.”

## Deliverables
- Maintain README with setup steps (Supabase, env vars, local dev).
- Provide database migrations / SQL.
- Maintain a short demo script (5 minutes) for contractor + underwriter flows.
