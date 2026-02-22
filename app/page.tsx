import Link from "next/link";

export default async function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Project Management Demo</h1>
      <ul>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contracts">Contracts</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/suppliers">Suppliers</Link>
        </li>
      </ul>
    </main>
  );
}
