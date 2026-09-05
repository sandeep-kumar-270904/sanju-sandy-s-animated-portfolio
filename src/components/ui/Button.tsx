import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-full";
    
    const variants = {
      primary: "bg-accent-primary text-bg-base hover:bg-accent-secondary hover:-translate-y-[2px]",
      secondary: "bg-transparent border border-border text-text-primary hover:border-text-primary hover:bg-surface hover:-translate-y-[2px]",
      ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

