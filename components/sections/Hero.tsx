import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PatternBackdrop } from "@/components/illustrations/PatternBackdrop";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <PatternBackdrop className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.04]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent-500/[0.08] blur-[120px]" />

      <Container className="relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <Badge className="text-accent-500">
            <ShieldCheck className="h-3.5 w-3.5" />
            {t("badge")}
          </Badge>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
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

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="sr-only">{t("stat1Label")}</dt>
              <dd className="font-heading text-2xl font-bold sm:text-3xl">1985</dd>
              <p className="mt-1 text-xs text-white/40">{t("stat1Label")}</p>
            </div>
            <div>
              <dt className="sr-only">{t("stat2Label")}</dt>
              <dd className="font-heading text-2xl font-bold sm:text-3xl">1000+</dd>
              <p className="mt-1 text-xs text-white/40">{t("stat2Label")}</p>
            </div>
            <div>
              <dt className="sr-only">{t("stat3Label")}</dt>
              <dd className="font-heading text-2xl font-bold sm:text-3xl">%100</dd>
              <p className="mt-1 text-xs text-white/40">{t("stat3Label")}</p>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-black/50">
            <Image
              src="/hero-elevator.jpg"
              alt="Panoramik cam asansör kabini görselleştirmesi"
              fill
              sizes="(min-width: 1024px) 448px, 384px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-brand-950/0 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
