"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { routing } from "@/lib/i18n/routing";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={cn("flex items-center gap-1 text-sm font-medium", className)}>
      <Globe className="h-4 w-4 opacity-60" strokeWidth={1.75} />
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className="mx-1 opacity-30">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            className={cn(
              "uppercase transition-colors",
              loc === locale ? "text-accent-600" : "opacity-60 hover:opacity-100",
            )}
            aria-current={loc === locale ? "true" : undefined}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
