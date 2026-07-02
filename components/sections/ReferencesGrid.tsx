"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { referenceCategories, referenceProjects, type ReferenceCategory } from "@/lib/data/references";
import { ReferenceCard } from "./ReferenceCard";

export function ReferencesGrid() {
  const t = useTranslations("references");
  const [active, setActive] = useState<ReferenceCategory | "all">("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? referenceProjects
        : referenceProjects.filter((p) => p.category === active),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            active === "all"
              ? "bg-brand-900 text-white"
              : "bg-brand-50 text-ink-muted hover:bg-brand-100",
          )}
        >
          {t("allCategories")}
        </button>
        {referenceCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              active === cat.id
                ? "bg-brand-900 text-white"
                : "bg-brand-50 text-ink-muted hover:bg-brand-100",
            )}
          >
            {t(`categories.${cat.id}`)}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ReferenceCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
