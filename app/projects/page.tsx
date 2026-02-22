import { api, authHeaders } from "@/lib/api";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await api.get("/projects", {
    query: { status: "execution", page: 1, limit: 10 },
    headers: {
      ...authHeaders("dummy"),
      Prefer: "example=sample",
    },
  });

  return (
    <main style={{ padding: 24 }}>
      <h1>Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <Link href={`/projects/${p.id}`}>{p.name}</Link> - {p.status}
          </li>
        ))}
      </ul>
    </main>
  );
}
