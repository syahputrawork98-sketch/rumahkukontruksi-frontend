# 09 - AI Collaboration Guidelines

Panduan ini membantu tim bekerja konsisten saat menggunakan AI assistant untuk task OpenAPI dan frontend integration.

## 1) Prinsip Umum Kolaborasi

- Perlakukan AI sebagai pair engineer, bukan pengganti review manusia.
- Semua output AI wajib divalidasi dengan command project (`lint`, `gen:types`, `mock:api`).
- Gunakan request yang spesifik dan berbasis file agar hasil akurat.

## 2) Format Prompt yang Direkomendasikan

Gunakan pola berikut saat minta bantuan AI:

```text
Konteks:
- Tujuan perubahan: ...
- File yang boleh diubah: ...
- Batasan: ...

Task:
1. ...
2. ...

Validasi yang diminta:
- Jalankan ...
- Pastikan ...
```

Contoh:

```text
Konteks:
- Tujuan: tambah endpoint GET /projects/{id}/contracts
- File: openapi/openapi.yaml, openapi/paths/contracts.yaml
- Batasan: jangan ubah schema lain

Task:
1. Tambah mapping path di root spec
2. Tambah operation `project_contracts`
3. Tambah examples response

Validasi:
- npm run gen:types
- npm run mock:api
```

## 3) Scope Control (Penting)

Selalu tetapkan batas:
- File mana yang boleh disentuh.
- Apa yang jangan diubah.
- Kriteria selesai (Definition of Done).

Contoh batasan:
- "Jangan ubah komponen UI lain di luar `app/projects/*`."
- "Jangan ubah `package.json` kecuali script `gen:types`."

## 4) Workflow AI untuk OpenAPI

Urutan yang direkomendasikan:

1. Edit spec (`openapi/*`).
2. Regenerate types (`npm run gen:types`).
3. Jalankan mock (`npm run mock:api`).
4. Uji endpoint yang berubah.
5. Integrasikan ke frontend (`src/lib/api.ts` / page).
6. Lint final (`npm run lint`).

## 5) Checklist Review Output AI

Sebelum menerima hasil AI, cek:

1. Tidak ada broken `$ref` pada OpenAPI.
2. Endpoint protected tetap punya `security`.
3. Response error konsisten pakai reusable response.
4. TypeScript types berhasil tergenerate.
5. Lint clean.
6. Tidak ada perubahan file di luar scope tanpa alasan.

## 6) Konvensi Komunikasi Tim + AI

Saat handoff ke anggota tim lain, sertakan:

- Ringkasan perubahan (endpoint/schema yang berubah).
- Command verifikasi yang sudah dijalankan.
- Known limitation / asumsi.

Template handoff:

```text
Summary:
- ...

Files changed:
- ...

Validated with:
- npm run gen:types
- npm run lint

Notes:
- ...
```

## 7) Hal yang Harus Dihindari

- Minta AI mengubah terlalu banyak domain sekaligus tanpa scope.
- Merge hasil AI tanpa menjalankan validasi lokal.
- Mengabaikan warning/error lint dengan disable rule tanpa alasan kuat.
- Mengandalkan contoh response mock tanpa cek schema sebenarnya.

## 8) Escalation Rules (Kapan Tanya Manual)

Stop dan eskalasi ke manusia jika:

- Desain kontrak API ambigu (nama field/status code diperdebatkan).
- Ada konflik keputusan bisnis (bukan teknis).
- Ada risiko breaking change ke consumer lain.

## 9) Definition of Done untuk Task AI

Task dianggap selesai jika:

1. Scope terpenuhi sesuai request.
2. Validasi teknis lulus (`gen:types`, `mock`, `lint` sesuai konteks).
3. Dokumentasi/notes diperbarui jika menyentuh kontrak.
4. Perubahan bisa dipahami anggota tim lain tanpa konteks tambahan.
