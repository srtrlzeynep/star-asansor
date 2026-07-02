import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { milestones } from "@/lib/data/milestones";

export function Milestones() {
  const t = useTranslations("about.milestones");

  return (
    <section className="bg-brand-50 py-24">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <ol className="mt-12 space-y-0">
          {milestones.map((year, i) => (
            <li key={year} className="relative flex gap-6 pb-8 last:pb-0">
              {i < milestones.length - 1 ? (
                <span className="absolute left-[19px] top-10 h-[calc(100%-2rem)] w-px bg-border" />
              ) : null}
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-900 text-white">
                <CheckCircle2 className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="pt-1.5">
                <p className="font-heading text-lg font-bold text-ink">{year}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {t(`items.${year}`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
