import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Register",
  description: "Pendaftaran akun RumahkuKonstruksi.",
};

export default function RegisterPage() {
  return (
    <main className="bg-[var(--color-background)] py-16">
      <Container className="max-w-xl">
        <Card variant="bordered" padding="lg">
          <CardHeader>
            <CardTitle>Daftar Akun</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[var(--color-text-secondary)]">
            <p>
              Endpoint register belum tersedia di kontrak API saat ini. Untuk melanjutkan pengujian flow aplikasi,
              gunakan login dengan akun yang sudah ada.
            </p>
            <Link href="/login">
              <Button>Ke Halaman Login</Button>
            </Link>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
}
