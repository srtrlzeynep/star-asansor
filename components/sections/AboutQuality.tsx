import { useTranslations } from "next-intl";
import { ShieldCheck, BadgeCheck, Recycle, Handshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { id: "safety", icon: ShieldCheck },
  { id: "standards", icon: BadgeCheck },
  { id: "sustainability", icon: Recycle },
  { id: "trust", icon: Handshake },
] as const;

export function AboutQuality() {
  const t = useTranslations("about.quality");

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-start gap-4 rounded-2xl border border-border p-6"
              >
                <Icon className="h-6 w-6 shrink-0 text-accent-600" strokeWidth={1.75} />
                <div>
                  <h3 className="font-heading text-base font-bold text-ink">
                    {t(`items.${item.id}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {t(`items.${item.id}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
