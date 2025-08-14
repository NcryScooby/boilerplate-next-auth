"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface SessionData {
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    token: string;
    ipAddress?: string | null;
    userAgent?: string | null;
  };
  user: User;
}

export function ClientUserCard() {
  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSession() {
      try {
        // Better Auth tem método getSession no client
        const sessionData = await authClient.getSession();
        setSession(sessionData.data);
      } catch (error) {
        console.error("Erro ao buscar sessão:", error);
        setSession(null);
      } finally {
        setLoading(false);
      }
    }

    getSession();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg animate-pulse">
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
        <p className="text-red-600">Sessão não encontrada</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
      <h3 className="font-semibold text-blue-800 mb-2">
        🔵 Client Component - Dados da Sessão
      </h3>
      <div className="space-y-1 text-sm">
        <p>
          <strong>Nome:</strong> {session.user.name}
        </p>
        <p>
          <strong>Email:</strong> {session.user.email}
        </p>
        <p>
          <strong>ID:</strong> {session.user.id}
        </p>
        <p className="text-gray-600">
          <strong>Verificado:</strong>{" "}
          {session.user.emailVerified ? "Sim" : "Não"}
        </p>
      </div>
    </div>
  );
}
