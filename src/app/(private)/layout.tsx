import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Validação única para todas as rotas privadas
  // Esta chamada é cacheada automaticamente pelo Next.js
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/");

  return <>{children}</>;
}
