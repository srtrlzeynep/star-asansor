import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { AboutStory } from "@/components/sections/AboutStory";
import { Milestones } from "@/components/sections/Milestones";
import { AboutValues } from "@/components/sections/AboutValues";
import { AboutQuality } from "@/components/sections/AboutQuality";
import { CtaBand } from "@/components/sections/CtaBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.page" });
  return { title: t("title") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about.page" });

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <AboutStory />
      <Milestones />
      <AboutValues />
      <AboutQuality />
      <CtaBand />
    </>
  );
}
