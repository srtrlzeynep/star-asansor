import { useTranslations } from "next-intl";
import { Target, Eye, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";

const items = [
  { id: "mission", icon: Target },
  { id: "vision", icon: Eye },
  { id: "values", icon: Compass },
] as const;

export function AboutValues() {
  const t = useTranslations("about.values");

  return (
    <section className="bg-brand-50 py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id}>
              <IconTile icon={item.icon} />
              <h3 className="mt-5 font-heading text-lg font-bold text-ink">
                {t(`${item.id}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {t(`${item.id}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
