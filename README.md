# Next.js Frontend Boilerplate Lv3

Boilerplate Next.js modern dengan design system lengkap, komponen reusable, dan best practices untuk tim kecil.

## ✨ Fitur Utama

- ✅ **Next.js 16** dengan App Router
- ✅ **React 19** dengan Server Components support
- ✅ **TypeScript** 100% type-safe
- ✅ **Tailwind CSS v4** modern styling
- ✅ **UI Kit Lengkap** 12+ komponen reusable
- ✅ **Dark Mode** dengan context + localStorage
- ✅ **Custom Hooks** 6+ hooks untuk common use cases
- ✅ **Utilities** 15+ helper functions
- ✅ **Toast System** untuk notifications
- ✅ **Responsive Design** mobile-first approach
- ✅ **ESLint** untuk code quality

## 🚀 Tech Stack

| Layer | Tools |
|-------|-------|
| **Framework** | Next.js 16, React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **State Management** | React Context API |
| **Linting** | ESLint 9 |
| **Build Tools** | Next.js (built-in) |

## 📁 Struktur Folder

src/
├── components/
│ ├── layout/ # Layout components (Header, Footer, Container)
│ ├── sections/ # Page sections (Hero, Features)
│ └── ui/ # Atomic UI components
├── context/ # React Context (Theme, Toast)
├── hooks/ # Custom hooks
├── lib/ # Utilities & helpers
├── styles/ # Global CSS & theme
└── utils/ # Format, validation, clipboard functions

app/
├── layout.tsx # Root layout with providers
├── page.tsx # Home page
└── showcase/ # Showcase pages
└── page.tsx # Component showcase


## 🚀 Quick Start

### Installation

```bash
# Clone repository
git clone <repository-url>
cd nextjs-frontend-boilerplate-lv2

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000

Build untuk Production
npm run build
npm start


📚 Dokumentasi Komponen

Button Component
import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <>
      {/* Variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>

      {/* Sizes */}
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>

      {/* Disabled */}
      <Button disabled>Disabled</Button>
    </>
  );
}

Card Component
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function Example() {
  return (
    <Card variant="bordered" padding="lg">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        Card content goes here
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}

Badge Component
import { Badge } from "@/components/ui/badge";

export default function Example() {
  return (
    <>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="default">Default</Badge>
    </>
  );
}

TextField Component
import { TextField } from "@/components/ui/text-field";

export default function Example() {
  return (
    <>
      <TextField
        label="Email"
        type="email"
        placeholder="your@email.com"
        hint="We'll never share your email"
      />

      <TextField
        label="Password"
        type="password"
        error="Password must be at least 8 characters"
      />
    </>
  );
}

Select Component
import { Select, type SelectOption } from "@/components/ui/select";

export default function Example() {
  const options: SelectOption[] = [
    { value: "id", label: "Indonesia" },
    { value: "my", label: "Malaysia" },
    { value: "sg", label: "Singapore" },
  ];

  return (
    <Select
      label="Country"
      options={options}
      placeholder="Select country"
    />
  );
}

Checkbox & Radio
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";

export default function Example() {
  return (
    <>
      <Checkbox label="I agree to terms" />
      <Checkbox label="Subscribe to newsletter" defaultChecked />

      <Radio label="Option 1" name="choice" value="1" />
      <Radio label="Option 2" name="choice" value="2" />
    </>
  );
}

Modal Component
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Confirm"
        size="md"
      >
        <p>Are you sure?</p>
        <div className="flex gap-2 justify-end mt-6">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </>
  );
}

Dropdown Menu
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@/components/ui/dropdown";

export default function Example() {
  return (
    <Dropdown>
      <DropdownTrigger>Menu ▼</DropdownTrigger>
      <DropdownContent>
        <DropdownItem onSelect={() => console.log("Edit")}>
          Edit
        </DropdownItem>
        <DropdownItem onSelect={() => console.log("Delete")}>
          Delete
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}

Toast Notifications
"use client";

import { useToast } from "@/context/toast-context";
import { Button } from "@/components/ui/button";

export default function Example() {
  const { addToast } = useToast();

  return (
    <>
      <Button
        onClick={() =>
          addToast({ message: "Success!", type: "success" })
        }
      >
        Show Success
      </Button>

      <Button
        onClick={() =>
          addToast({ message: "Error!", type: "error" })
        }
      >
        Show Error
      </Button>

      <Button
        onClick={() =>
          addToast({ message: "Warning!", type: "warning", duration: 5000 })
        }
      >
        Show Warning (5s)
      </Button>
    </>
  );
}

Dark Mode Usage
"use client";

import { useDarkMode } from "@/hooks";
import { Button } from "@/components/ui/button";

export default function Example() {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <div>
      <p>Current mode: {isDark ? "Dark" : "Light"}</p>
      <Button onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
}


🪝 Custom Hooks
useMediaQuery
Deteksi responsive breakpoints:
import { useMediaQuery, useIsMobile } from "@/hooks";

export default function Example() {
  const isMobile = useIsMobile();
  const isCustom = useMediaQuery("(max-width: 1024px)");

  return (
    <div>
      {isMobile && <p>Mobile view</p>}
      {!isMobile && <p>Desktop view</p>}
    </div>
  );
}

useLocalStorage
Manage localStorage dengan type-safe:
import { useLocalStorage } from "@/hooks";

export default function Example() {
  const [name, setName] = useLocalStorage("userName", "Guest");

  return (
    <div>
      <p>User: {name}</p>
      <button onClick={() => setName("John")}>Update Name</button>
    </div>
  );
}

useDebounce
Debounce input untuk search:
"use client";

import { useState } from "react";
import { useDebounce } from "@/hooks";

export default function Example() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <p>Searching: {debouncedSearch}</p>
    </div>
  );
}

useAsync
Handle async operations:
import { useAsync } from "@/hooks";

export default function Example() {
  const { status, data, error, execute } = useAsync(
    async () => {
      const res = await fetch("/api/data");
      return res.json();
    },
    false // immediate=false, execute manually
  );

  return (
    <div>
      <button onClick={execute}>Fetch Data</button>
      {status === "pending" && <p>Loading...</p>}
      {status === "success" && <p>Data: {JSON.stringify(data)}</p>}
      {status === "error" && <p>Error: {error?.message}</p>}
    </div>
  );
}

🛠️ Utilities
Format Functions
import { formatCurrency, formatDate, formatFileSize } from "@/utils";

// Currency
formatCurrency(50000) // "Rp 50.000,00"

// Date
formatDate(new Date()) // "21 Februari 2026"

// File size
formatFileSize(1024000) // "1000.00 KB"


Validation Functions
import {
  isValidEmail,
  isValidPhoneNumber,
  isStrongPassword,
} from "@/utils";

isValidEmail("test@example.com") // true
isValidPhoneNumber("081234567890") // true

const result = isStrongPassword("Pass123!");
console.log(result.isStrong) // true
console.log(result.errors) // []

Clipboard Functions
import { copyToClipboard, readFromClipboard } from "@/utils";

// Copy to clipboard
await copyToClipboard("Hello!");

// Read from clipboard
const text = await readFromClipboard();
console.log(text);


🎯 Best Practices
1. Component Props
Selalu gunakan React.forwardRef dan proper TypeScript types:
import * as React from "react";

export type MyComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "primary" | "secondary";
};

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ variant = "primary", ...props }, ref) => {
    return <div ref={ref} {...props} />;
  }
);

MyComponent.displayName = "MyComponent";

2. Compound Components
Untuk complex components, gunakan compound pattern:
<Card variant="bordered">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>

3. Dark Mode Classes
Selalu gunakan dark: prefix di Tailwind:
<div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
  Content
</div>

4. Type Safety
Gunakan TypeScript untuk semua fungsi:
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "ghost";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
};


📝 Project Commands
# Development
npm run dev          # Start dev server on :3000

# Build
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint

📦 Bundle Size
Boilerplate ini sudah dioptimasi untuk:

✅ Tree-shaking dengan ES modules
✅ Code splitting otomatis Next.js
✅ CSS purging dengan Tailwind
✅ Image optimization
🤝 Contributing
Kontribusi welcome! Untuk menambah:

Komponen baru: Buat di ui
Hooks baru: Buat di hooks
Utilities baru: Buat di utils
Export: Tambah di index.ts masing-masing folder
📄 License
MIT License - bebas digunakan dan dimodifikasi

🔗 Resources
Next.js Docs
React Docs
Tailwind CSS
TypeScript
🙏 Acknowledgments
Built with ❤️ untuk tim kecil yang ingin produktif dan maintainable.
## API Contract Docs

- Detailed OpenAPI workflow (split docs): docs/api-contract/README.md


