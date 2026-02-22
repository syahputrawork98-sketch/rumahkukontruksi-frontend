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

export default async function ClientsPage() {
  const result = await api
    .get("/clients", {
      headers: {
        ...authHeaders("dummy"),
        Prefer: "example=sample",
      },
    })
    .then((clients) => ({ clients, error: null as string | null }))
    .catch((err: unknown) => ({ clients: null, error: getErrorMessage(err) }));

  if (result.error) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Clients</h1>
        <ErrorState message={result.error} />
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Clients</h1>
      <ul>
        {result.clients?.map((c) => (
          <li key={c.id}>
            <Link href={`/clients/${c.id}`}>{c.name}</Link> ({c.contactEmail})
          </li>
        ))}
      </ul>
    </main>
  );
}
