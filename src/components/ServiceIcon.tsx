import { BriefcaseBusiness, Calculator, Factory, FileStack, HandCoins, ReceiptText, type LucideProps } from "lucide-react";
import type { IconKey } from "@/data/services";

const icons = {
  gst: ReceiptText,
  payroll: HandCoins,
  outsourcing: BriefcaseBusiness,
  factory: Factory,
  accounts: Calculator,
  other: FileStack,
} satisfies Record<IconKey, unknown>;

export function ServiceIcon({ icon, ...props }: { icon: IconKey } & LucideProps) {
  const Icon = icons[icon];
  return <Icon aria-hidden="true" {...props} />;
}
