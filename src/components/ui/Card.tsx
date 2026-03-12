import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-background-secondary p-6 transition-all duration-300",
        hover && "hover:border-border-hover hover:bg-surface",
        className
      )}
    >
      {children}
    </div>
  );
}
