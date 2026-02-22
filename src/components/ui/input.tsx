// src/components/ui/input.tsx
import * as React from "react";
import { cn } from "@/lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
