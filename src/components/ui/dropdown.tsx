"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

type DropdownContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
};

const DropdownContext = React.createContext<DropdownContextType | undefined>(
  undefined
);

function useDropdown() {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used within Dropdown");
  }
  return context;
}

// Main Dropdown Container
export function Dropdown({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  );
}

// Dropdown Trigger Button
export const DropdownTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { open, setOpen, triggerRef } = useDropdown();

  return (
    <button
      ref={(node) => {
        triggerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      onClick={() => setOpen(!open)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
        "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
        "hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

DropdownTrigger.displayName = "DropdownTrigger";

// Dropdown Content
export const DropdownContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { open } = useDropdown();

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-full left-0 mt-2 w-48 rounded-lg bg-white dark:bg-zinc-900 shadow-lg dark:shadow-2xl z-50",
        "border border-zinc-200 dark:border-zinc-700 py-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

DropdownContent.displayName = "DropdownContent";

// Dropdown Item
export const DropdownItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onSelect?: () => void;
  }
>(({ className, onSelect, children, ...props }, ref) => {
  const { setOpen } = useDropdown();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSelect?.();
    setOpen(false);
    props.onClick?.(e);
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        "w-full text-left px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300",
        "hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
        "focus:outline-none focus:bg-zinc-100 dark:focus:bg-zinc-800",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

DropdownItem.displayName = "DropdownItem";

// Dropdown Separator
export const DropdownSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("my-1 h-px bg-zinc-200 dark:bg-zinc-700", className)}
    {...props}
  />
));

DropdownSeparator.displayName = "DropdownSeparator";