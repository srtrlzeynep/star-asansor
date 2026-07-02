import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

const stats = ["experience", "projects", "support", "offices"] as const;

export function StatsBand() {
  const t = useTranslations("home.stats");

  return (
    <section className="border-y border-border bg-surface-muted py-14">
      <Container className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((key) => (
          <div key={key} className="text-center lg:text-left">
            <p className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              {t(`${key}.value`)}
            </p>
            <p className="mt-2 text-sm text-ink-muted">{t(`${key}.label`)}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
