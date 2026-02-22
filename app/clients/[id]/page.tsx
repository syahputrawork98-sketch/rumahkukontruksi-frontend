import { ErrorState } from "@/components/error-state";
import { api, authHeaders } from "@/lib/api";

type PageProps = {
  params: { id: string };
};

function getErrorMessage(err: unknown): string {
  if (typeof err === "object" && err !== null && "message" in err) {
    const message = (err as { message?: unknown }).message;
    if (typeof message === "string") return message;
  }
  return "Unknown error";
}

export default async function ClientDetailPage({ params }: PageProps) {
  const result = await api
    .get("/clients/{id}", {
      path: { id: params.id },
      headers: {
        ...authHeaders("dummy"),
        Prefer: "example=sample",
      },
    })
    .then((client) => ({ client, error: null as string | null }))
    .catch((err: unknown) => ({ client: null, error: getErrorMessage(err) }));

  if (result.error) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Client Detail</h1>
        <ErrorState message={result.error} />
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Client Detail</h1>
      <p>ID: {result.client?.id}</p>
      <p>Name: {result.client?.name}</p>
      <p>Email: {result.client?.contactEmail}</p>
    </main>
  );
}
