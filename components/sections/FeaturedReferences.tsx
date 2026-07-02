import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { referenceProjects } from "@/lib/data/references";
import { ReferenceCard } from "./ReferenceCard";

export function FeaturedReferences() {
  const t = useTranslations("home.referencesSection");
  const featured = referenceProjects.slice(0, 3);

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
          <Button href="/referanslar" variant="ghost" className="shrink-0">
            {t("cta")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ReferenceCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
