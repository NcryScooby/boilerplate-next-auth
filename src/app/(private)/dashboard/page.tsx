import { auth } from "@/lib/auth";
import { ButtonSignOut } from "./_components/button-signout";
import { headers } from "next/headers";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold mb-2">Página dashboard</h1>
      <h3>
        Seja bem-vindo, <strong>{session?.user?.name}</strong>.
      </h3>
      <ButtonSignOut />
    </div>
  );
}
