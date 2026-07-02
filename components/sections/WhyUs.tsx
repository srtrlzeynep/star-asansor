import { useTranslations } from "next-intl";
import { Award, ShieldCheck, Users, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";

const items = [
  { id: "experience", icon: Award },
  { id: "safety", icon: ShieldCheck },
  { id: "satisfaction", icon: Users },
  { id: "reach", icon: Globe },
] as const;

export function WhyUs() {
  const t = useTranslations("home.whyUs");

  return (
    <section className="bg-brand-50 py-24">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.id}>
              <IconTile icon={item.icon} className="bg-white text-ink shadow-sm" />
              <h3 className="mt-5 font-heading text-base font-bold text-ink">
                {t(`items.${item.id}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {t(`items.${item.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
