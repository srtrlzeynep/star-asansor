import { useTranslations } from "next-intl";
import { MapPin, Phone, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Office } from "@/lib/data/offices";

export function OfficeCard({ office }: { office: Office }) {
  const t = useTranslations("offices");

  return (
    <Card>
      <h3 className="font-heading text-lg font-bold text-ink">
        {t(`${office.nameKey}.label`)}
      </h3>
      <div className="mt-4 space-y-3 text-sm text-ink-muted">
        <p className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
          {office.address}
        </p>
        <a
          href={`tel:${office.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-2.5 hover:text-ink"
        >
          <Phone className="h-4 w-4 shrink-0 text-accent-600" />
          {office.phone}
        </a>
        <p className="flex items-center gap-2.5">
          <Clock className="h-4 w-4 shrink-0 text-accent-600" />
          {office.hours}
        </p>
      </div>
    </Card>
  );
}
