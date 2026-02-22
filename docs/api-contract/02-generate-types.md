# 02 - Generate Types

OpenAPI dipakai untuk menghasilkan TypeScript types agar frontend tidak menulis type manual.

## Command

```bash
npm run gen:types
```

## Script

```json
"gen:types": "openapi-typescript openapi/openapi.yaml --output src/types/api.ts"
```

## Output

- `src/types/api.ts`

## Kapan Wajib Generate Ulang

- Setelah ubah schema (`openapi/components/schemas.yaml`).
- Setelah tambah/edit endpoint (`openapi/paths/*.yaml`).
- Setelah ubah response status/code/content.

## Cara Pakai di Frontend

- `src/lib/api.ts` memakai type `paths` dari `src/types/api.ts`.
- Autocomplete path dan params mengikuti spec.

## Validasi Cepat

- Pastikan command sukses tanpa error.
- Pastikan `src/types/api.ts` berubah sesuai endpoint baru.
