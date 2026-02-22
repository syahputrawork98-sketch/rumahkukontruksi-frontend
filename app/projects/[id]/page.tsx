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

export default async function ProjectDetailPage({ params }: PageProps) {
  const result = await api
    .get("/projects/{id}", {
      path: { id: params.id },
      headers: {
        ...authHeaders("dummy"),
        Prefer: "example=sample",
      },
    })
    .then((project) => ({ project, error: null as string | null }))
    .catch((err: unknown) => ({ project: null, error: getErrorMessage(err) }));

  if (result.error) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Project Detail</h1>
        <ErrorState message={result.error} />
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Project Detail</h1>
      <p>ID: {result.project?.id}</p>
      <p>Name: {result.project?.name}</p>
      <p>Status: {result.project?.status}</p>
      <p>Client: {result.project?.clientId}</p>
      <p>Budget: {result.project?.budgetTotal}</p>
    </main>
  );
}
