import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface-elevated p-6 shadow-sm shadow-brand-950/[0.03] transition-shadow duration-200 hover:shadow-md hover:shadow-brand-950/[0.06]",
        className,
      )}
    >
      {children}
    </div>
  );
}
