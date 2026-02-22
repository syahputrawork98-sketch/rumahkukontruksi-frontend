import { api, authHeaders } from "@/lib/api";
import { ErrorState } from "@/components/error-state";
import Link from "next/link";

function getErrorMessage(err: unknown): string {
  if (typeof err === "object" && err !== null && "message" in err) {
    const message = (err as { message?: unknown }).message;
    if (typeof message === "string") return message;
  }
  return "Unknown error";
}

export default async function SuppliersPage() {
  const result = await api
    .get("/suppliers", {
      headers: {
        ...authHeaders("dummy"),
        Prefer: "example=sample",
      },
    })
    .then((suppliers) => ({ suppliers, error: null as string | null }))
    .catch((err: unknown) => ({ suppliers: null, error: getErrorMessage(err) }));

  if (result.error) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Suppliers</h1>
        <ErrorState message={result.error} />
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Suppliers</h1>
      <ul>
        {result.suppliers?.map((s) => (
          <li key={s.id}>
            <Link href={`/suppliers/${s.id}`}>{s.name}</Link> ({s.contactEmail})
          </li>
        ))}
      </ul>
    </main>
  );
}
