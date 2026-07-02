import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function IconTile({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-muted text-brand-900",
        className,
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </div>
  );
}
