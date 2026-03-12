import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer",
    {
      "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/30":
        variant === "primary",
      "bg-surface border border-border text-foreground hover:bg-surface-hover hover:border-border-hover":
        variant === "secondary",
      "text-foreground-muted hover:text-foreground hover:bg-surface":
        variant === "ghost",
    },
    {
      "px-3 py-1.5 text-sm": size === "sm",
      "px-5 py-2.5 text-sm": size === "md",
      "px-6 py-3 text-base": size === "lg",
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
