import { HTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-surface border border-border rounded-lg overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          hoverable && "hover:border-border-hover hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };

