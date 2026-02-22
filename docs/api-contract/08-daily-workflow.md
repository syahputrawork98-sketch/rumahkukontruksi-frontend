# 08 - Daily Workflow

Alur kerja harian yang direkomendasikan tim.

## Saat Menambah/Mengubah API

1. Edit OpenAPI (`openapi/`).
2. Jalankan type generation.
3. Jalankan mock server.
4. Integrasi di frontend (`src/lib/api.ts`, pages/components).
5. Jalankan lint.
6. Commit.

## Urutan Command

```bash
npm run gen:types
npm run mock:api
npm run lint
```

## Branch Hygiene

- Satu branch fokus satu scope perubahan contract.
- Hindari campur refactor unrelated dengan perubahan API.

## Definition of Done (DoD)

- Spec valid dan konsisten.
- Types update.
- Mock bisa serve endpoint terkait.
- Frontend route/flow yang terdampak sudah dites.
- Lint clean.
