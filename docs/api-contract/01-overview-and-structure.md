# 01 - Overview & Structure

Dokumen ini menjelaskan struktur OpenAPI yang dipakai sebagai source of truth antara frontend dan backend.

## Tujuan Kontrak API

- Menyamakan ekspektasi request/response frontend-backend.
- Menghasilkan TypeScript types otomatis.
- Menjalankan mock API cepat untuk parallel development.

## Struktur Folder

```text
openapi/
  openapi.yaml
  components/
    schemas.yaml
    responses.yaml
    securitySchemes.yaml
  paths/
    auth.yaml
    projects.yaml
    contracts.yaml
    procurement.yaml
    finance.yaml
    progress.yaml
    uploads.yaml
    clients.yaml
    suppliers.yaml
```

## Peran Tiap File

- `openapi/openapi.yaml`
  - Entry point spec (`openapi`, `info`, `servers`, `tags`).
  - Mapping semua endpoint ke `paths/*.yaml`.
  - Mapping `components` ke file modular.

- `openapi/components/schemas.yaml`
  - Semua schema entity (User, Project, Contract, dst).
  - Reusable object untuk request/response.

- `openapi/components/responses.yaml`
  - Reusable error response (`Unauthorized`, `ValidationError`, `NotFound`).

- `openapi/components/securitySchemes.yaml`
  - Definisi `CookieAuth` dan `BearerAuth`.

- `openapi/paths/*.yaml`
  - Definisi operation endpoint per domain.
  - Menyimpan parameters, requestBody, responses, examples.

## Rules

- Jangan taruh detail endpoint langsung di `openapi/openapi.yaml`.
- Semua `$ref` di path file diarahkan langsung ke `../components/*.yaml`.
- Tambahkan `examples` untuk response utama agar mock stabil.
