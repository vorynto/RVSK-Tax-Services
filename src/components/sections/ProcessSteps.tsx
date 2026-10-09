import { Info } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Motion";
import { processSteps } from "@/data/content";

export function ProcessSteps() {
  return (
    <>
      <Stagger as="ol" className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <span
          className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-brand-green-300 via-brand-blue-200 to-brand-blue-300 lg:block"
          aria-hidden="true"
        />
        {processSteps.map((step, i) => (
          <StaggerItem key={step.title} as="li" className="relative">
            <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand font-display text-2xl font-extrabold text-white shadow-[0_12px_30px_-12px_rgb(51_57_130/0.6)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-muted">{step.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-center text-sm text-slate-muted">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-500" aria-hidden="true" />
        Actual timelines depend on the service and on when the required information and documents are available.
      </p>
    </>
  );
}
