"use client";

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

interface ClientUserWithPropsProps {
  session: SessionData;
}

export function ClientUserWithProps({ session }: ClientUserWithPropsProps) {
  return (
    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
      <h3 className="font-semibold text-purple-800 mb-2">
        🟣 Client Component - Via Props
      </h3>
      <div className="space-y-1 text-sm">
        <p>
          <strong>Nome:</strong> {session.user.name}
        </p>
        <p>
          <strong>Email:</strong> {session.user.email}
        </p>
        <p>
          <strong>Token:</strong> {session.session.token.slice(0, 20)}...
        </p>
        <p className="text-gray-600">
          <strong>User Agent:</strong> {session.session.userAgent?.slice(0, 30)}
          ...
        </p>
      </div>
      <p className="text-xs text-purple-600 mt-2">
        💡 Dados passados diretamente via props
      </p>
    </div>
  );
}
