// src/components/sections/hero.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="bg-background text-foreground">
      <Container className="flex min-h-[calc(100vh-4rem)] flex-col items-start justify-center gap-8 py-24">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Nextjs Boilerplate Lv1
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            UI kit sederhana untuk mulai cepat
          </h1>
          <p className="max-w-xl text-lg text-zinc-600">
            Struktur rapi, komponen atomik, dan styling konsisten untuk kebutuhan tim.
          </p>
        </div>

        <div className="flex w-full max-w-md flex-col gap-3">
          <Input placeholder="Masukkan email tim..." />
          <div className="flex gap-3">
            <Button>Get Started</Button>
            <Button variant="secondary">Documentation</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
