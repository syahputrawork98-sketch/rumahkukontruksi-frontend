import * as React from "react";
import { cn } from "@/lib/cn";

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      hint,
      error,
      size = "md",
      disabled,
      ...props
    },
    ref
  ) => {
    const isError = !!error;
    const hasLabel = !!label;
    const hasHint = !!hint && !isError;

    const sizeClasses: Record<string, string> = {
      sm: "h-8 px-2 text-sm",
      md: "h-10 px-3 text-base",
      lg: "h-12 px-4 text-lg",
    };

    const borderColors = isError
      ? "border-red-500 dark:border-red-400 focus:ring-red-500"
      : "border-zinc-300 dark:border-zinc-600 focus:ring-blue-500";

    return (
      <div className="w-full">
        {hasLabel && (
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full rounded-lg border bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-950",
            sizeClasses[size],
            borderColors,
            disabled && "opacity-50 cursor-not-allowed bg-zinc-50 dark:bg-zinc-900",
            className
          )}
          {...props}
        />
        {hasHint && (
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            {hint}
          </p>
        )}
        {isError && (
          <p className="text-xs text-red-600 dark:text-red-400 mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";