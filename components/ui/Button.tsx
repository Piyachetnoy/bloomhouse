import * as React from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "line";
  size?: "default" | "sm" | "lg" | "icon";
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "default", href, ...props }, ref) => {
    // Moved uppercase and tracking to baseStyles for consistency
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 rounded-sm cursor-pointer whitespace-nowrap uppercase tracking-[0.2em] shadow-none";
    
    const variants = {
      // Added borders to primary/secondary to match outline geometry and add definition
      primary: "bg-white text-black border border-white hover:bg-zinc-200 hover:border-zinc-200",
      secondary: "bg-black text-white border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700",
      outline: "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black hover:border-white",
      ghost: "bg-transparent border border-transparent hover:bg-white/10 text-white",
      line: "bg-[#06C755] text-white border border-[#06C755] hover:bg-[#05b34c] hover:border-[#05b34c]",
    };

    const sizes = {
      // All buttons use the same size for consistency
      default: "h-auto py-4 px-8 text-xs", 
      sm: "h-auto py-4 px-8 text-xs",
      lg: "h-auto py-4 px-8 text-xs",
      icon: "h-auto py-4 w-10 px-0 flex items-center justify-center text-xs",
    };

    const combinedClassName = [baseStyles, variants[variant], sizes[size], className]
      .filter(Boolean)
      .join(" ");

    if (href) {
      return (
        <Link href={href} className={combinedClassName} target={props.target} rel={props.rel}>
          {props.children}
        </Link>
      );
    }

    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
