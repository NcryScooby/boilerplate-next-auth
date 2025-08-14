"use client";

import { useSessionContext } from "./session-context-provider";

export function ClientUserWithContext() {
  const { session } = useSessionContext();

  return (
    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
      <h3 className="font-semibold text-green-800 mb-2">
        🟢 Client Component - Via Context (Server → Client)
      </h3>
      <div className="space-y-1 text-sm">
        <p>
          <strong>Nome:</strong> {session.user.name}
        </p>
        <p>
          <strong>Email:</strong> {session.user.email}
        </p>
        <p>
          <strong>Session ID:</strong> {session.session.id}
        </p>
        <p className="text-gray-600">
          <strong>Criado em:</strong>{" "}
          {new Date(session.user.createdAt).toLocaleDateString("pt-BR")}
        </p>
      </div>
      <p className="text-xs text-green-600 mt-2">
        💡 Dados vêm do Server Component via Context
      </p>
    </div>
  );
}
