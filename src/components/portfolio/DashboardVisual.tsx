import { Activity, PieChart, Table2, TrendingUp } from "lucide-react";

/** Decorative analytics/dashboard illustration used in the hero. */
export function DashboardVisual() {
  const bars = [42, 66, 38, 84, 55, 72, 48];

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem]"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      {/* Laptop */}
      <div className="rounded-2xl border border-border bg-card p-3 shadow-card">
        <div className="rounded-xl bg-lavender p-4">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/10" />
            <span className="ml-auto text-[10px] font-semibold uppercase tracking-widest text-primary">
              Business Intelligence
            </span>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Revenue", value: "₹1.2M" },
              { label: "Orders", value: "8,420" },
              { label: "Profit", value: "18.4%" },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-border bg-card p-2.5">
                <p className="text-[10px] font-medium text-muted-foreground">{kpi.label}</p>
                <p className="text-sm font-bold text-foreground">{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* Bar + line chart */}
          <div className="mt-2 grid grid-cols-5 gap-2">
            <div className="col-span-3 rounded-lg border border-border bg-card p-3">
              <p className="mb-2 text-[10px] font-semibold text-muted-foreground">Sales by month</p>
              <div className="flex h-24 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-primary/80 transition-all duration-700"
                    style={{ height: `${h}%`, opacity: 0.45 + i * 0.08 }}
                  />
                ))}
              </div>
              <svg viewBox="0 0 100 24" className="mt-1 h-6 w-full" aria-hidden="true">
                <polyline
                  points="0,18 16,12 32,15 48,6 64,10 80,4 100,8"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Donut + table */}
            <div className="col-span-2 flex flex-col gap-2">
              <div className="rounded-lg border border-border bg-card p-3">
                <p className="mb-1 text-[10px] font-semibold text-muted-foreground">Category split</p>
                <svg viewBox="0 0 36 36" className="mx-auto h-16 w-16" aria-hidden="true">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="var(--primary-soft)" strokeWidth="6" />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="6"
                    strokeDasharray="58 88"
                    strokeLinecap="round"
                    transform="rotate(-90 18 18)"
                  />
                </svg>
              </div>
              <div className="rounded-lg border border-border bg-card p-3">
                <p className="mb-1.5 text-[10px] font-semibold text-muted-foreground">Top outlets</p>
                <div className="space-y-1.5">
                  {[80, 62, 45].map((w, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="h-1.5 flex-1 rounded-full bg-secondary">
                        <span
                          className="block h-1.5 rounded-full bg-primary/70"
                          style={{ width: `${w}%` }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-3 h-1.5 w-1/3 rounded-full bg-secondary" />
      </div>

      {/* Floating cards */}
      <div className="absolute -left-4 top-10 hidden animate-float rounded-xl border border-border bg-card px-3 py-2 shadow-card sm:flex sm:items-center sm:gap-2">
        <TrendingUp className="h-4 w-4 text-primary" aria-hidden="true" />
        <span className="text-xs font-semibold text-foreground">Data Analytics</span>
      </div>
      <div
        className="absolute -right-3 top-1/3 hidden animate-float rounded-xl border border-border bg-card px-3 py-2 shadow-card sm:flex sm:items-center sm:gap-2"
        style={{ animationDelay: "1.5s" }}
      >
        <PieChart className="h-4 w-4 text-primary" aria-hidden="true" />
        <span className="text-xs font-semibold text-foreground">Data Visualization</span>
      </div>
      <div
        className="absolute -bottom-5 left-8 hidden animate-float rounded-xl border border-border bg-card px-3 py-2 shadow-card sm:flex sm:items-center sm:gap-2"
        style={{ animationDelay: "0.8s" }}
      >
        <Table2 className="h-4 w-4 text-primary" aria-hidden="true" />
        <span className="text-xs font-semibold text-foreground">Dashboards</span>
      </div>
      <div
        className="absolute -bottom-4 right-6 hidden animate-float rounded-xl border border-border bg-card px-3 py-2 shadow-card md:flex md:items-center md:gap-2"
        style={{ animationDelay: "2.2s" }}
      >
        <Activity className="h-4 w-4 text-primary" aria-hidden="true" />
        <span className="text-xs font-semibold text-foreground">Business Intelligence</span>
      </div>
    </div>
  );
}
