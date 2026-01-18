export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Wraply MGA Platform
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
          Texas Workers&apos; Compensation Subscriber MGA — MVP Build
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          This repository is being scaffolded for a production-grade MVP covering
          quote-to-bind, policy issuance, COI generation, and claims reporting
          with internal underwriting workflows.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Contractor Portal",
            items: [
              "Guided submission flow",
              "Rules-based eligibility",
              "Indicative quotes & bind request",
              "COI management and claims intake"
            ]
          },
          {
            title: "Internal Admin",
            items: [
              "Manual review queue",
              "Policy issuance actions",
              "Claims and endorsements tracking",
              "Audit-ready activity logging"
            ]
          }
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-white">{card.title}</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 p-6 text-slate-300">
        <h2 className="text-lg font-semibold text-white">Next Steps</h2>
        <p className="mt-2">
          We will add Supabase auth, submission intake, eligibility rules, admin
          workflows, and PDF generation in iterative, reviewable milestones.
        </p>
      </section>
    </main>
  );
}
