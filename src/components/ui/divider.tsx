import * as React from "react";
import { cn } from "@/lib/cn";

type DividerOrientation = "horizontal" | "vertical";
type DividerVariant = "default" | "subtle" | "bold";

const variantClasses: Record<DividerVariant, string> = {
  default: "bg-zinc-200 dark:bg-zinc-800",
  subtle: "bg-zinc-100 dark:bg-zinc-900",
  bold: "bg-zinc-300 dark:bg-zinc-700",
};

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  withLabel?: React.ReactNode;
};

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation = "horizontal",
      variant = "default",
      withLabel,
      ...props
    },
    ref
  ) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          className={cn(
            "h-full w-px",
            variantClasses[variant],
            className
          )}
          {...props}
        />
      );
    }

    if (withLabel) {
      return (
        <div
          ref={ref}
          className={cn("flex items-center gap-4", className)}
          {...props}
        >
          <div className={cn("flex-1 h-px", variantClasses[variant])} />
          <span className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            {withLabel}
          </span>
          <div className={cn("flex-1 h-px", variantClasses[variant])} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("h-px w-full", variantClasses[variant], className)}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";