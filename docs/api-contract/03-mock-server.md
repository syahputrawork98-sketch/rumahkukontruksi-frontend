# 03 - Mock Server

Mock server dipakai agar frontend bisa develop tanpa menunggu backend implementasi.

## Command

```bash
npm run mock:api
```

## Script

```json
"mock:api": "prism mock openapi/openapi.yaml -p 3001"
```

## Base URL Mock

- `http://127.0.0.1:3001`

## Testing dari PowerShell

```powershell
$headers = @{
  Authorization = "Bearer dummy"
  Prefer = "example=sample"
}

Invoke-RestMethod http://127.0.0.1:3001/projects -Headers $headers
```

## Prinsip Kerja Prism

- Jika `Prefer: example=sample`, Prism cari `examples.sample`.
- Jika key tidak ada, Prism bisa return error (contoh: requested exampleKey tidak ditemukan).

## Tips

- Restart mock server setiap habis ubah file OpenAPI.
- Simpan key `examples` konsisten (`sample`, `created`, `updated`) dan pakai sesuai request.
