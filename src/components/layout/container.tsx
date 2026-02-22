// src/components/layout/container.tsx
import * as React from "react";
import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-6", className)}
      {...props}
    />
  );
}
