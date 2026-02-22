import * as React from "react";
import { cn } from "@/lib/cn";

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses: Record<string, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const labelSizeClasses: Record<string, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, size = "md", disabled, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <input
          ref={ref}
          type="radio"
          disabled={disabled}
          className={cn(
            "rounded-full border-zinc-300 dark:border-zinc-600 text-blue-600 dark:text-blue-500",
            "focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-950",
            "transition-colors cursor-pointer",
            sizeClasses[size],
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          {...props}
        />
        {label && (
          <label
            className={cn(
              "text-zinc-700 dark:text-zinc-300 cursor-pointer select-none",
              labelSizeClasses[size],
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";