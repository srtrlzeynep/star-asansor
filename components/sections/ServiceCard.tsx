import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { Link } from "@/lib/i18n/navigation";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const t = useTranslations("services.items");

  return (
    <Card className="group flex h-full flex-col">
      <IconTile icon={service.icon} />
      <h3 className="mt-5 font-heading text-lg font-bold text-ink">
        {t(`${service.id}.title`)}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {t(`${service.id}.description`)}
      </p>
      <Link
        href="/hizmetler"
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-600"
      >
        {t("cta")}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </Card>
  );
}
