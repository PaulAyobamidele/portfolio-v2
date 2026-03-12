import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-surface text-foreground-muted": variant === "default",
          "bg-accent-muted text-accent-hover": variant === "accent",
          "border border-border text-foreground-muted hover:border-border-hover":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
