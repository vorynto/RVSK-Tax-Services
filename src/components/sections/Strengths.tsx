import { Clock, Layers, ShieldCheck, Target, UserCheck, Users } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Motion";
import { strengths } from "@/data/content";

const icons = { user: UserCheck, target: Target, users: Users, layers: Layers, clock: Clock, shield: ShieldCheck };

export function Strengths() {
  return (
    <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {strengths.map((s) => {
        const Icon = icons[s.icon];
        return (
          <StaggerItem key={s.title} className="h-full">
            <div className="group h-full rounded-3xl border border-line bg-white/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue-200 hover:bg-white hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue-50 text-brand-blue-600 transition-colors duration-300 group-hover:bg-brand-blue-600 group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-muted">{s.text}</p>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
