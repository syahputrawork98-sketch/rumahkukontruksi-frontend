// src/components/sections/features.tsx
import { Container } from "@/components/layout/container";

const FEATURES = [
  {
    title: "Struktur Rapi",
    desc: "Folder dipisah untuk UI, layout, dan sections agar tim mudah scaling.",
  },
  {
    title: "UI Kit Dasar",
    desc: "Button dan Input siap pakai, konsisten dengan Tailwind.",
  },
  {
    title: "Alias Import",
    desc: "Gunakan `@/` supaya import bersih dan mudah dibaca.",
  },
];

export function Features() {
  return (
    <section className="border-t border-zinc-100 bg-white">
      <Container className="py-20">
        <h2 className="text-2xl font-semibold">Fitur Utama</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
