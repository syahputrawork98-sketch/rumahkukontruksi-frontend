
// src/components/layout/header.tsx
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function Header() {
  return (
    <header className="border-b border-zinc-100 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <div className="text-lg font-semibold">Boilerplate Lv3</div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">Docs</Button>
          <Button>Get Started</Button>
        </div>
      </Container>
    </header>
  );
}
