import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyUs } from "@/components/sections/WhyUs";
import { StatsBand } from "@/components/sections/StatsBand";
import { FeaturedReferences } from "@/components/sections/FeaturedReferences";
import { CtaBand } from "@/components/sections/CtaBand";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <StatsBand />
      <FeaturedReferences />
      <CtaBand />
    </>
  );
}
