import * as React from "react";
import { cn } from "@/lib/cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "bordered" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
};

const variantClasses: Record<string, string> = {
  default: "bg-white dark:bg-zinc-950 rounded-lg",
  bordered: "bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800",
  elevated: "bg-white dark:bg-zinc-950 rounded-lg shadow-md dark:shadow-lg",
};

const paddingClasses: Record<string, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", padding = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          variantClasses[variant],
          paddingClasses[padding],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

// Compound components untuk struktur yang lebih baik
export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("font-semibold text-lg", className)}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-zinc-600 dark:text-zinc-400", className)}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("pt-4", className)}
    {...props}
  />
));

CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";