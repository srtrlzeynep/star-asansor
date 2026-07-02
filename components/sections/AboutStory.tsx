import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { PatternBackdrop } from "@/components/illustrations/PatternBackdrop";

export function AboutStory() {
  const t = useTranslations("about.story");

  return (
    <section className="py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 to-white ring-1 ring-border shadow-xl shadow-brand-950/10">
            <PatternBackdrop className="pointer-events-none absolute inset-0 h-full w-full text-brand-900/[0.05]" />
            <Image
              src="/logo-badge.png"
              alt="Star Asansör"
              width={220}
              height={220}
              className="relative drop-shadow-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
