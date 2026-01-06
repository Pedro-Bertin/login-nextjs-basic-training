"use client";

import { useRouter } from "next/navigation";
import { logoutUser } from "@/action/logout";

export default function DashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    await logoutUser();
    router.push("/login");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Bem-vindo! Você está logado.</h1>

      <button
        onClick={handleLogout}
        className="rounded-full bg-red-600 px-6 py-2 text-white hover:bg-red-700"
      >
        Sair
      </button>
    </div>
  );
}
