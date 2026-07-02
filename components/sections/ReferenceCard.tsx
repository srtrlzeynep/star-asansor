import { useTranslations } from "next-intl";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { ReferenceProject } from "@/lib/data/references";

export function ReferenceCard({ project }: { project: ReferenceProject }) {
  const t = useTranslations("references");

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-900">
        <Image
          src={project.image}
          alt={t(`projects.${project.id}`)}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.year ? (
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
            <CheckCircle2 className="h-3 w-3" />
            {t("completed", { year: project.year })}
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
          {t(`categories.${project.category}`)}
        </p>
        <h3 className="mt-1 font-heading text-base font-bold text-ink">
          {t(`projects.${project.id}`)}
        </h3>
        <p className="mt-1 text-sm text-ink-subtle">{project.location}</p>
      </div>
    </div>
  );
}
