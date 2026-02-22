import { api, authHeaders } from "@/lib/api";
import Link from "next/link";

export default async function ContractsPage() {
  const contracts = await api.get("/contracts", {
    query: { projectId: "prj_001" },
    headers: {
      ...authHeaders("dummy"),
      Prefer: "example=sample",
    },
  });

  return (
    <main style={{ padding: 24 }}>
      <h1>Contracts</h1>
      <ul>
        {contracts.map((c) => (
          <li key={c.id}>
            <Link href={`/contracts/${c.id}`}>{c.scope}</Link> - {c.projectId}
          </li>
        ))}
      </ul>
    </main>
  );
}
