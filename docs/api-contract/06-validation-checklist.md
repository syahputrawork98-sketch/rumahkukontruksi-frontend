# 06 - Validation Checklist

Checklist wajib sebelum push/PR.

## Mandatory

1. `npm run gen:types` sudah dijalankan (jika OpenAPI berubah).
2. `npm run mock:api` bisa start tanpa error.
3. Endpoint yang diubah bisa dites minimal 1 request.
4. `npm run lint` clean.

## Functional Smoke Test

Gunakan minimal salah satu endpoint domain yang berubah:

```powershell
$headers = @{ Authorization = "Bearer dummy"; Prefer = "example=sample" }
Invoke-RestMethod http://127.0.0.1:3001/projects -Headers $headers
```

## PR Notes yang Direkomendasikan

- Endpoint apa yang berubah.
- Schema baru/diubah.
- Dampak ke frontend route/component.
- Contoh request/response yang dipakai untuk verifikasi.
