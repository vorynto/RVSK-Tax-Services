import { Building2, Check, House } from "lucide-react";
import { Reveal } from "@/components/motion/Motion";

/**
 * Comparison of the two outsourcing arrangements, plus the bookkeeping work and
 * reports described on the existing rvsktaxservices.com/outsourcing page.
 */
const rows = [
  {
    label: "Where your accounts are maintained",
    onsite: "At your premises",
    offsite: "At RVSK’s premises",
  },
  {
    label: "How the work is arranged",
    onsite: "Periodic visits, or an RVSK employee deployed to your location on a regular basis",
    offsite: "You share financial data; our team records and maintains it",
  },
  {
    label: "Visit frequency",
    onsite: "Daily, weekly, fortnightly or monthly, as agreed",
    offsite: "Not applicable — data is shared with us",
  },
  {
    label: "Staffing",
    onsite: "Deployed staff remain on RVSK’s payroll",
    offsite: "Handled by our team at our office",
  },
  {
    label: "Data handling",
    onsite: "Records stay at your location",
    offsite: "Focus on the accuracy, availability and security of your data",
  },
];

const bookkeepingWork = [
  "Day-to-day accounting transactions",
  "Monthly accounts receivable report",
  "Monthly accounts payable report",
  "GST return filing",
  "TDS return filing",
  "Annual financial statement preparation",
  "Vendor payment processing",
];

const reports = ["MIS reports", "Balance sheet", "Profit and loss account", "Accounts receivable and payable", "Stock and related reports"];

export function OutsourcingComparison() {
  return (
    <div className="space-y-16">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Comparison of on-site and off-site accounts bookkeeping</caption>
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="hidden w-1/4 px-6 py-5 text-sm font-semibold text-slate-muted md:table-cell">
                  Aspect
                </th>
                <th scope="col" className="px-4 py-5 sm:px-6">
                  <span className="flex items-center gap-2 font-display text-base font-bold text-brand-green-800 sm:text-lg">
                    <House className="h-5 w-5" aria-hidden="true" /> On-site
                  </span>
                </th>
                <th scope="col" className="px-4 py-5 sm:px-6">
                  <span className="flex items-center gap-2 font-display text-base font-bold text-brand-blue-600 sm:text-lg">
                    <Building2 className="h-5 w-5" aria-hidden="true" /> Off-site
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-line align-top">
                  <th scope="row" className="hidden px-6 py-5 text-sm font-semibold text-ink md:table-cell">
                    {r.label}
                  </th>
                  <td className="px-4 py-5 text-sm leading-relaxed text-slate-muted sm:px-6 sm:text-base">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink md:hidden">{r.label}</span>
                    {r.onsite}
                  </td>
                  <td className="px-4 py-5 text-sm leading-relaxed text-slate-muted sm:px-6 sm:text-base">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink md:hidden">{r.label}</span>
                    {r.offsite}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-8">
            <h3 className="text-xl font-bold text-ink">Typical bookkeeping work</h3>
            <p className="mt-2 text-slate-muted">
              We receive your financial data, categorise bank transactions, expenses, bills and invoices, reconcile them and record them in
              Tally. Our senior accountants review the data for accuracy. Work typically includes:
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {bookkeepingWork.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-ink/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-green-600" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-8">
            <h3 className="text-xl font-bold text-ink">Financial reports you can expect</h3>
            <p className="mt-2 text-slate-muted">
              We can provide the standard financial reports generated by the accounting software, including:
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {reports.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-ink/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-blue-500" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
