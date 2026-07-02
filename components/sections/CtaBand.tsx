import { useTranslations } from "next-intl";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PatternBackdrop } from "@/components/illustrations/PatternBackdrop";

export function CtaBand() {
  const t = useTranslations("home.cta");

  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 text-white">
      <PatternBackdrop className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/20 blur-[100px]" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h2>
        <p className="max-w-xl text-white/60">{t("description")}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/iletisim" variant="light" size="lg">
            {t("primaryCta")}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <a
            href="tel:+908507227827"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-7 text-[15px] font-semibold text-white transition-colors hover:bg-white/5"
          >
            <Phone className="h-4 w-4" />
            {t("secondaryCta")}
          </a>
        </div>
      </Container>
    </section>
  );
}
