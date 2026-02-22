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

export default async function SupplierDetailPage({ params }: PageProps) {
  const result = await api
    .get("/suppliers/{id}", {
      path: { id: params.id },
      headers: {
        ...authHeaders("dummy"),
        Prefer: "example=sample",
      },
    })
    .then((supplier) => ({ supplier, error: null as string | null }))
    .catch((err: unknown) => ({ supplier: null, error: getErrorMessage(err) }));

  if (result.error) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Supplier Detail</h1>
        <ErrorState message={result.error} />
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Supplier Detail</h1>
      <p>ID: {result.supplier?.id}</p>
      <p>Name: {result.supplier?.name}</p>
      <p>Email: {result.supplier?.contactEmail}</p>
    </main>
  );
}
