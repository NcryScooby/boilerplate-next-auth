import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Profile() {
  // Mais uma chamada de getSession - mas é cacheada!
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Perfil do Usuário</h1>

      <div className="bg-gray-100 p-6 rounded-lg max-w-md w-full">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nome:
          </label>
          <p className="text-lg">{session?.user?.name}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <p className="text-lg">{session?.user?.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ID:</label>
          <p className="text-sm text-gray-600">{session?.user?.id}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Membro desde:
          </label>
          <p className="text-sm text-gray-600">
            {session?.user?.createdAt &&
              new Date(session.user.createdAt).toLocaleDateString("pt-BR")}
          </p>
        </div>
      </div>
    </div>
  );
}
