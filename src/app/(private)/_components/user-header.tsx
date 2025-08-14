import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function UserHeader() {
  // Mais uma chamada em um componente - também é cacheada!
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-lg font-semibold">Minha Aplicação</h2>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
            {session?.user?.name?.charAt(0).toUpperCase()}
          </div>
          <span>{session?.user?.name}</span>
        </div>
      </div>
    </header>
  );
}
