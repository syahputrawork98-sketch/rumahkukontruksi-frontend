// src/components/layout/Footer.tsx

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">
      <Container>
        <div className="py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              RumahkuKonstruksi
            </h2>
            <p className="text-sm leading-relaxed text-neutral-400">
              Platform digital untuk transparansi, efisiensi, dan
              profesionalisme dalam proses konstruksi modern.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Fitur
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Simulasi Biaya
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Platform
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Dashboard Konsumen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Dashboard Mandor
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} RumahkuKonstruksi. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
