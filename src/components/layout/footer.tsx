// src/components/layout/footer.tsx
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <Container className="flex h-16 items-center justify-between text-sm text-zinc-500">
        <span>© 2026 Boilerplate Lv1</span>
        <span>Built with Next.js</span>
      </Container>
    </footer>
  );
}
