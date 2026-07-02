import { Container } from "@/components/ui/Container";
import { PatternBackdrop } from "@/components/illustrations/PatternBackdrop";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 text-white sm:py-20">
      <PatternBackdrop className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]" />
      <Container className="relative">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-white/70">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
