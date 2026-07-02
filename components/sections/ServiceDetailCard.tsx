import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import type { Service } from "@/lib/data/services";

export function ServiceDetailCard({ service }: { service: Service }) {
  const t = useTranslations("services.items");
  const features = t.raw(`${service.id}.features`) as string[];

  return (
    <Card className="flex h-full flex-col">
      <IconTile icon={service.icon} className="h-14 w-14 rounded-2xl" />
      <h3 className="mt-6 font-heading text-xl font-bold text-ink">
        {t(`${service.id}.title`)}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {t(`${service.id}.description`)}
      </p>
      <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" strokeWidth={2.5} />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}
