// src/components/layout/Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-xl font-bold text-primary tracking-tight"
          >
            Rumahku<span className="text-neutral-800">Konstruksi</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <Link href="#" className="hover:text-primary transition">
              Beranda
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Fitur
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Simulasi
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Tentang
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="secondary">
              Masuk
            </Button>
            <Button>
              Daftar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="flex flex-col gap-4 px-6 py-6 text-sm font-medium text-neutral-700">
            <Link href="#">Beranda</Link>
            <Link href="#">Fitur</Link>
            <Link href="#">Simulasi</Link>
            <Link href="#">Tentang</Link>

            <div className="flex flex-col gap-3 pt-4 border-t border-neutral-200">
              <Button variant="secondary">Masuk</Button>
              <Button>Daftar</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
