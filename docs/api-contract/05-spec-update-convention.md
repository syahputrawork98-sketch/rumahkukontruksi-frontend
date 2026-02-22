# 05 - Spec Update Convention

Panduan standar saat menambah atau mengubah kontrak API.

## Menambah Endpoint Baru

1. Tambah mapping path di `openapi/openapi.yaml`.
2. Tambah operation di `openapi/paths/<domain>.yaml`.
3. Tambah/ubah schema jika perlu di `openapi/components/schemas.yaml`.
4. Referensikan error dari `openapi/components/responses.yaml`.
5. Tambahkan request/response examples.
6. Jalankan `npm run gen:types`.

## Menambah Schema Baru

1. Tambah schema di `openapi/components/schemas.yaml`.
2. Pakai schema tersebut di requestBody/response endpoint.
3. Cek field required dan format (`date`, `email`, `uri`).

## Naming Rules

- Path item key: snake_case (`project_contracts`, `contract_by_id`).
- Field schema: camelCase (`budgetTotal`, `signedAt`).
- ID value gunakan pola konsisten (`prj_001`, `ctr_001`).

## Security Rules

Untuk endpoint protected, wajib deklarasi:

```yaml
security:
  - CookieAuth: []
  - BearerAuth: []
```

## Ref Rules

- Dari `openapi/paths/*.yaml`, arahkan `$ref` ke:
  - `../components/schemas.yaml#/...`
  - `../components/responses.yaml#/...`
- Hindari ref chaining melalui `../openapi.yaml#/components/...`.
