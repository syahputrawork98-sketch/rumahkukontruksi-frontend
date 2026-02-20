import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 active:scale-[0.98] focus:ring-primary",
    secondary:
      "bg-neutral-light text-neutral-dark hover:bg-neutral-light/80 active:scale-[0.98] focus:ring-neutral-dark",
    danger:
      "bg-semantic-error text-white hover:bg-semantic-error/90 active:scale-[0.98] focus:ring-semantic-error",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
