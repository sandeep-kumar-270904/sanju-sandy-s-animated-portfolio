import { HTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "technical";
}

const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({ className, variant = "default", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center font-mono text-xs uppercase tracking-widest";
    
    const variants = {
      default: "text-text-secondary",
      accent: "text-accent-primary",
      technical: "text-text-muted border border-border px-2 py-1 rounded-sm bg-surface-elevated",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

export { Label };

