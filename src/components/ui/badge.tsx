import * as React from "react";
import { cn } from "@/lib/cn";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "secondary";

type BadgeSize = "sm" | "md" | "lg";

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
  success:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  warning:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  error:
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  info:
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  secondary:
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs font-medium",
  md: "px-3 py-1 text-sm font-medium",
  lg: "px-4 py-1.5 text-base font-medium",
};

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full whitespace-nowrap",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";