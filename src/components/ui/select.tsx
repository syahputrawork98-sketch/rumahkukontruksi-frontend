import * as React from "react";
import { cn } from "@/lib/cn";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  options: SelectOption[];
  placeholder?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      hint,
      error,
      size = "md",
      disabled,
      options,
      placeholder = "Select an option",
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
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full rounded-lg border bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors appearance-none cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-950",
            "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 20 20%22%3E%3Cpath stroke=%22%23333%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%221.5%22 d=%22M6 8l4 4 4-4%22/%3E%3C/svg%3E')] bg-[length:1.5em_1.5em] bg-no-repeat [background-position:right_0.5rem_center] pr-8",
            "dark:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 20 20%22%3E%3Cpath stroke=%22%23ccc%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%221.5%22 d=%22M6 8l4 4 4-4%22/%3E%3C/svg%3E')]",
            sizeClasses[size],
            borderColors,
            disabled && "opacity-50 cursor-not-allowed bg-zinc-50 dark:bg-zinc-900",
            className
          )}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = "Select";