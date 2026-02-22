import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QUICK_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/contracts", label: "Contracts" },
  { href: "/clients", label: "Clients" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/showcase", label: "Showcase" },
];

type HomePageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Beranda",
  description: "Beranda RumahkuKonstruksi untuk akses cepat modul operasional dan role demo.",
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = (await searchParams) ?? {};
  const nextPath = typeof params.next === "string" ? params.next : "/dashboard";

  return (
    <>
      <Hero />
      <Features />

      <section className="border-t border-[var(--color-border)] bg-[var(--color-background)] py-16">
        <Container className="space-y-6">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Akses Sistem</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Link href={`/login?next=${encodeURIComponent(nextPath)}`}>
                <Button>Masuk ke Dashboard</Button>
              </Link>
              <Link href="/register">
                <Button variant="secondary">Daftar Akun</Button>
              </Link>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Akses Cepat Modul</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {QUICK_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-text-primary)]"
                >
                  {item.label}
                </Link>
              ))}
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
