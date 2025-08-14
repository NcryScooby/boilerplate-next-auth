import { auth } from "@/lib/auth";
import { ButtonSignOut } from "./_components/button-signout";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Dashboard() {
  // Esta chamada é automaticamente cacheada pelo Next.js
  // Mesmo sendo chamada no layout, não faz uma nova requisição!
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold mb-2">Página dashboard</h1>
      <h3>
        Seja bem-vindo, <strong>{session?.user?.name}</strong>.
      </h3>
      <p className="text-gray-600 mb-6">Email: {session?.user?.email}</p>

      {/* Links de navegação */}
      <div className="flex gap-4 mb-6">
        <Link
          href="/profile"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
        >
          Ver Perfil
        </Link>
        <Link
          href="/settings"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
        >
          Configurações
        </Link>
        <Link
          href="/client-examples"
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors"
        >
          Client Components
        </Link>
      </div>

      <ButtonSignOut />
    </div>
  );
}
