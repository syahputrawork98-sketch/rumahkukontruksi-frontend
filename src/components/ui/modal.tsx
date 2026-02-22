import * as React from "react";
import { cn } from "@/lib/cn";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  closeButton?: boolean;
};

const sizeClasses: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onOpenChange,
      title,
      children,
      size = "md",
      closeButton = true,
    },
    ref
  ) => {
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    }, [open]);

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 dark:bg-black/70"
          onClick={() => onOpenChange(false)}
          aria-hidden="true"
        />

        {/* Modal Content */}
        <div
          ref={ref}
          className={cn(
            "relative z-10 w-full bg-white dark:bg-zinc-950 rounded-lg shadow-lg dark:shadow-2xl p-6",
            sizeClasses[size],
            "mx-4 max-h-[90vh] overflow-y-auto"
          )}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            {title && (
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {title}
              </h2>
            )}
            {closeButton && (
              <button
                onClick={() => onOpenChange(false)}
                className="ml-auto text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Content */}
          <div className="text-zinc-700 dark:text-zinc-300">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

// Compound components untuk struktur yang lebih baik
export const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2", className)}
    {...props}
  />
));

ModalHeader.displayName = "ModalHeader";

export const ModalBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("py-4", className)}
    {...props}
  />
));

ModalBody.displayName = "ModalBody";

export const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-end gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800", className)}
    {...props}
  />
));

ModalFooter.displayName = "ModalFooter";