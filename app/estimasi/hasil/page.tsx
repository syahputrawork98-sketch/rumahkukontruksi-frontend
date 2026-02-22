import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/empty-state";
import { calculateEstimasi, parseEstimasiInput, validateEstimasiInput } from "@/features/estimasi";
import { formatCurrency } from "@/utils/format";

export const metadata: Metadata = {
  title: "Hasil Estimasi",
  description: "Ringkasan hasil perhitungan estimasi biaya konstruksi.",
};

type HasilPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function EstimasiHasilPage({ searchParams }: HasilPageProps) {
  const params = (await searchParams) ?? {};

  const input = parseEstimasiInput({
    areaM2: params.areaM2,
    floors: params.floors,
    quality: params.quality,
    durationMonths: params.durationMonths,
    workerCount: params.workerCount,
    contingencyPct: params.contingencyPct,
  });

  const errors = validateEstimasiInput(input);
  const hasErrors = Object.values(errors).some(Boolean);

  if (hasErrors) {
    return (
      <main className="bg-[var(--color-background)] py-12">
        <section className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <EmptyState
            title="Input Estimasi Tidak Valid"
            message="Data input tidak lengkap atau tidak valid. Kembali ke form estimasi untuk memperbaiki data."
            action={
              <Link href="/estimasi">
                <Button>Kembali ke Form</Button>
              </Link>
            }
          />
        </section>
      </main>
    );
  }

  const result = calculateEstimasi(input);

  return (
    <main className="bg-[var(--color-background)] py-12">
      <section className="mx-auto grid w-full max-w-[1280px] gap-6 px-6 lg:grid-cols-3 lg:px-8">
        <Card variant="bordered" className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Ringkasan Estimasi Biaya</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {result.breakdown.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm text-[var(--color-text-secondary)]">
                <span>{item.label}</span>
                <strong className="text-[var(--color-text-primary)]">{formatCurrency(item.amount)}</strong>
              </div>
            ))}
            <div className="h-px w-full bg-[var(--color-divider)]" />
            <div className="flex items-center justify-between text-sm text-[var(--color-text-secondary)]">
              <span>Contingency ({input.contingencyPct}%)</span>
              <strong className="text-[var(--color-text-primary)]">{formatCurrency(result.contingencyAmount)}</strong>
            </div>
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold text-[var(--color-text-primary)]">Total Estimasi</span>
              <strong className="text-xl text-[var(--color-primary)]">{formatCurrency(result.total)}</strong>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Parameter Input</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <p>Luas: {input.areaM2} m2</p>
            <p>Lantai: {input.floors}</p>
            <p>Kualitas: {input.quality}</p>
            <p>Durasi: {input.durationMonths} bulan</p>
            <p>Pekerja: {input.workerCount} orang</p>
            <div className="pt-3">
              <Link href="/estimasi">
                <Button variant="secondary">Ubah Estimasi</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
