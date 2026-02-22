# 04 - Base URL Strategy

Strategi base URL memudahkan switch antara mock dan backend real tanpa ubah kode di banyak tempat.

## Env yang Dipakai

- `NEXT_PUBLIC_API_BASE_URL`

## Contoh untuk Mock

`.env.local`

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:3001
```

## Contoh untuk Backend Real

`.env.local`

```env
NEXT_PUBLIC_API_BASE_URL=https://api.company.com
```

## Lokasi Konsumsi Env

- `src/lib/api.ts`

## Rule Tim

- Jangan hardcode URL API di page/component.
- Semua HTTP call lewat `src/lib/api.ts`.
