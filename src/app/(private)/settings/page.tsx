import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { UserHeader } from "../_components/user-header";

export default async function Settings() {
  // Terceira chamada de getSession na mesma request - ainda é cacheada!
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="min-h-screen">
      <UserHeader />
      <div className="container mx-auto flex items-center justify-center flex-col pt-20">
        <h1 className="text-2xl font-bold mb-4">Configurações</h1>

        <div className="bg-white p-6 border rounded-lg max-w-md w-full">
          <p className="text-gray-600 mb-4">
            Configurações da conta de <strong>{session?.user?.name}</strong>
          </p>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Email verificado:</span>
              <span
                className={
                  session?.user?.emailVerified
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {session?.user?.emailVerified ? "Sim" : "Não"}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span>Conta criada:</span>
              <span className="text-sm text-gray-500">
                {session?.user?.createdAt &&
                  new Date(session.user.createdAt).toLocaleDateString("pt-BR")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
