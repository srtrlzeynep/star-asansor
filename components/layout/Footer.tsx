import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BuildingsSkyline } from "@/components/illustrations/BuildingsSkyline";
import { offices } from "@/lib/data/offices";

const links = [
  { href: "/", key: "home" },
  { href: "/hakkimizda", key: "about" },
  { href: "/hizmetler", key: "services" },
  { href: "/referanslar", key: "references" },
  { href: "/iletisim", key: "contact" },
] as const;

export function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const to = useTranslations("offices");

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <BuildingsSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-white/5" />

      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image src="/logo-badge.png" alt="Star Asansör" width={56} height={56} />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {tf("tagline")}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
              {tf("quickLinks")}
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>
          </div>

          {offices.map((office) => (
            <div key={office.id}>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
                {to(`${office.nameKey}.label`)}
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  {office.address}
                </span>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-500" />
                  {office.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-white/50">
          <p className="text-white/40">{tf("legalName")}</p>
          <div className="mt-3 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>{tf("copyright", { year: new Date().getFullYear() })}</p>
            <a href="mailto:info@starasansor.com" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" />
              info@starasansor.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
