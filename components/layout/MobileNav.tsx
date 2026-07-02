"use client";

import { Link } from "@/lib/i18n/navigation";
import { X, Phone } from "lucide-react";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", key: "home" },
  { href: "/hakkimizda", key: "about" },
  { href: "/hizmetler", key: "services" },
  { href: "/referanslar", key: "references" },
  { href: "/iletisim", key: "contact" },
] as const;

export function MobileNav({
  open,
  onClose,
  t,
  phone,
}: {
  open: boolean;
  onClose: () => void;
  t: (key: string) => string;
  phone: string;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 isolate lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-brand-950/50 transition-opacity duration-300 transform-gpu",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute right-0 top-0 flex h-dvh w-[85%] max-w-sm flex-col bg-surface p-6 shadow-xl transition-transform duration-300 will-change-transform transform-gpu",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <LocaleSwitcher />
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-brand-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 text-lg font-semibold text-ink hover:bg-brand-50"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="mt-auto flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" />
          {phone}
        </a>
      </div>
    </div>
  );
}
