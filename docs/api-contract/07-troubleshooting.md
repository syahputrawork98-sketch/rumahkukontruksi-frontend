# 07 - Troubleshooting

## 1. `ERR_CONNECTION_REFUSED`

Penyebab:
- Mock server tidak running.

Solusi:
- Jalankan `npm run mock:api`.
- Pastikan URL `http://127.0.0.1:3001`.

## 2. Prism `NO_PATH_MATCHED_ERROR`

Penyebab:
- Path belum terdaftar di `openapi/openapi.yaml`.

Solusi:
- Tambah mapping path di root spec.
- Restart Prism.

## 3. Response `UNAUTHORIZED`

Penyebab:
- Endpoint protected dipanggil tanpa auth header.

Solusi:
- Tambah `Authorization: Bearer dummy` saat test mock.

## 4. Example key tidak ditemukan

Penyebab:
- Header `Prefer: example=<key>` tidak sama dengan key di spec.

Solusi:
- Gunakan key yang benar (`sample`, `created`, `updated`, dst).
- Atau hapus header `Prefer` untuk default response.

## 5. Type tidak update

Penyebab:
- Lupa regenerate types.

Solusi:
- Jalankan `npm run gen:types`.

## 6. `curl -H` gagal di PowerShell

Penyebab:
- `curl` adalah alias `Invoke-WebRequest`.

Solusi:
- Pakai `Invoke-RestMethod` + hashtable headers.
