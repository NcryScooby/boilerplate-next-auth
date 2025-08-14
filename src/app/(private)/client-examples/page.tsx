import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { SessionContextProvider } from "../_components/session-context-provider";
import { ClientUserCard } from "../_components/client-user-card";
import { ClientUserWithContext } from "../_components/client-user-with-context";
import { ClientUserWithProps } from "../_components/client-user-with-props";

export default async function ClientExamples() {
  // Server Component busca os dados (cacheado automaticamente)
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <div>Não autenticado</div>;
  }

  return (
    <div className="container mx-auto min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📱 Exemplos de Client Components com Sessão
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {/* Abordagem 1: Better Auth Client Hook */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            1️⃣ Better Auth Client Hook (authClient.getSession)
          </h2>
          <ClientUserCard />
        </div>

        {/* Abordagem 2: Context Provider */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            2️⃣ Context API (Server → Client via Provider)
          </h2>
          <SessionContextProvider session={session}>
            <ClientUserWithContext />
          </SessionContextProvider>
        </div>

        {/* Abordagem 3: Props Drilling */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            3️⃣ Props Drilling (Dados passados diretamente)
          </h2>
          <ClientUserWithProps session={session} />
        </div>

        {/* Comparação */}
        <div className="bg-gray-50 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold mb-4">
            🔍 Comparação das Abordagens:
          </h3>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-blue-100 p-4 rounded">
              <h4 className="font-medium text-blue-800 mb-2">
                🔵 Better Auth Hook
              </h4>
              <ul className="text-sm space-y-1">
                <li>✅ Nativo do Better Auth</li>
                <li>✅ Reatividade automática</li>
                <li>⚠️ Client-side request</li>
                <li>⚠️ Loading state necessário</li>
              </ul>
            </div>

            <div className="bg-green-100 p-4 rounded">
              <h4 className="font-medium text-green-800 mb-2">
                🟢 Context Provider
              </h4>
              <ul className="text-sm space-y-1">
                <li>✅ Server-side data</li>
                <li>✅ Sem requests extras</li>
                <li>✅ Compartilhado globalmente</li>
                <li>⚠️ Mais código inicial</li>
              </ul>
            </div>

            <div className="bg-purple-100 p-4 rounded">
              <h4 className="font-medium text-purple-800 mb-2">
                🟣 Props Drilling
              </h4>
              <ul className="text-sm space-y-1">
                <li>✅ Mais simples</li>
                <li>✅ Server-side data</li>
                <li>✅ Type-safe</li>
                <li>⚠️ Props manuais</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
