"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { TextField } from "@/components/ui/text-field";
import { Select, type SelectOption } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Modal } from "@/components/ui/modal";
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, DropdownSeparator } from "@/components/ui/dropdown";
import { useToast } from "@/context/toast-context";
import { useDarkMode } from "@/hooks";
import { formatCurrency, formatDate } from "@/utils";

export default function ShowcasePage() {
  const { addToast } = useToast();
  const { isDark, toggleTheme } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);

  const countryOptions: SelectOption[] = [
    { value: "id", label: "Indonesia" },
    { value: "my", label: "Malaysia" },
    { value: "sg", label: "Singapore" },
    { value: "th", label: "Thailand" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="border-b border-zinc-200 dark:border-zinc-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Component Showcase</h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Eksplorasi semua komponen dan utilitas yang tersedia di Lv2
              </p>
            </div>
            <Button variant="ghost" onClick={toggleTheme} size="lg">
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Buttons</h2>
          <Card variant="bordered" padding="lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              <Divider />

              <div>
                <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
                  Sizes
                </h3>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <Divider />

              <div>
                <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
                  States
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Badge Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Badges</h2>
          <Card variant="bordered" padding="lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>

              <Divider />

              <div>
                <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
                  Sizes
                </h3>
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
              </CardHeader>
              <CardContent>
                Ini adalah card dengan variant default
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Bordered Card</CardTitle>
              </CardHeader>
              <CardContent>
                Ini adalah card dengan border
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
              </CardHeader>
              <CardContent>
                Ini adalah card dengan shadow
              </CardContent>
            </Card>

            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>Card dengan Footer</CardTitle>
              </CardHeader>
              <CardContent>
                Card ini memiliki footer
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="primary">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Form Components Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Form Components</h2>
          <Card variant="bordered" padding="lg">
            <div className="space-y-6 max-w-xl">
              <TextField
                label="Full Name"
                placeholder="Enter your name"
                hint="Your full name will be used in documents"
              />

              <TextField
                label="Email"
                type="email"
                placeholder="your@email.com"
                error="Email format tidak valid"
              />

              <Select
                label="Country"
                options={countryOptions}
                placeholder="Pilih negara"
                hint="Negara tempat tinggal Anda"
              />

              <div className="space-y-3">
                <label className="block text-sm font-medium">Preferences</label>
                <Checkbox label="I agree to terms and conditions" />
                <Checkbox
                  label="Subscribe to newsletter"
                  defaultChecked
                />
              </div>

              <Divider withLabel="atau" />

              <div className="space-y-3">
                <label className="block text-sm font-medium">Choose Option</label>
                <Radio
                  label="Option 1"
                  name="options"
                  value="1"
                  defaultChecked
                />
                <Radio
                  label="Option 2"
                  name="options"
                  value="2"
                />
                <Radio
                  label="Option 3"
                  name="options"
                  value="3"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Advanced Components Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Advanced Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Modal */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle className="text-base">Modal</CardTitle>
              </CardHeader>
              <CardContent className="pb-0">
                <Button onClick={() => setModalOpen(true)} variant="primary">
                  Open Modal
                </Button>
              </CardContent>
            </Card>

            {/* Dropdown */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle className="text-base">Dropdown Menu</CardTitle>
              </CardHeader>
              <CardContent className="pb-0">
                <Dropdown>
                  <DropdownTrigger>
                    Actions ▼
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownItem
                      onSelect={() => addToast({ message: "Edit clicked", type: "info" })}
                    >
                      Edit
                    </DropdownItem>
                    <DropdownItem
                      onSelect={() => addToast({ message: "Copy clicked", type: "info" })}
                    >
                      Copy
                    </DropdownItem>
                    <DropdownSeparator />
                    <DropdownItem
                      onSelect={() => addToast({ message: "Delete clicked", type: "error" })}
                    >
                      Delete
                    </DropdownItem>
                  </DropdownContent>
                </Dropdown>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Toast Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Toast Notifications</h2>
          <Card variant="bordered" padding="lg">
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => addToast({ message: "Success!", type: "success" })}
                variant="primary"
              >
                Success Toast
              </Button>
              <Button
                onClick={() => addToast({ message: "Error occurred!", type: "error" })}
                variant="primary"
              >
                Error Toast
              </Button>
              <Button
                onClick={() => addToast({ message: "Warning!", type: "warning" })}
                variant="primary"
              >
                Warning Toast
              </Button>
              <Button
                onClick={() => addToast({ message: "Information", type: "info" })}
                variant="primary"
              >
                Info Toast
              </Button>
            </div>
          </Card>
        </section>

        {/* Utilities Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Utilities Demo</h2>
          <Card variant="bordered" padding="lg">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">formatCurrency</p>
                <p className="text-lg font-semibold">
                  {formatCurrency(50000)}
                </p>
              </div>
              <Divider />
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">formatDate</p>
                <p className="text-lg font-semibold">
                  {formatDate(new Date())}
                </p>
              </div>
              <Divider />
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Current Theme</p>
                <p className="text-lg font-semibold">
                  {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Footer Section */}
        <Divider />
        <div className="py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>Next.js Frontend Boilerplate Lv2 — Built with TypeScript, Tailwind CSS & React 19</p>
        </div>
      </main>

      {/* Modal Example */}
      <Modal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Confirm Action"
        size="md"
      >
        <div className="space-y-4">
          <p>Apakah Anda yakin ingin melanjutkan aksi ini?</p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                addToast({ message: "Action confirmed!", type: "success" });
                setModalOpen(false);
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
