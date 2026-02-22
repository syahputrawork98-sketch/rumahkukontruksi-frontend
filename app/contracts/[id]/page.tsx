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

export default async function ContractDetailPage({ params }: PageProps) {
  const result = await api
    .get("/contracts/{id}", {
      path: { id: params.id },
      headers: {
        ...authHeaders("dummy"),
        Prefer: "example=sample",
      },
    })
    .then((contract) => ({ contract, error: null as string | null }))
    .catch((err: unknown) => ({ contract: null, error: getErrorMessage(err) }));

  if (result.error) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Contract Detail</h1>
        <ErrorState message={result.error} />
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Contract Detail</h1>
      <p>ID: {result.contract?.id}</p>
      <p>Project: {result.contract?.projectId}</p>
      <p>Contractor: {result.contract?.contractorId}</p>
      <p>Scope: {result.contract?.scope}</p>
      <p>Signed At: {result.contract?.signedAt}</p>
    </main>
  );
}
