"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { registerUser } from "@/action/register";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = await registerUser(nome, password);

    if (!result.success) {
      alert(result.message);
      return;
    }

    router.push("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-md rounded-2xl bg-white px-8 py-12 shadow-lg dark:bg-zinc-900">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/next.svg"
            alt="Logo"
            width={100}
            height={20}
            className="dark:invert"
          />
        </div>

        {/* Título */}
        <h1 className="mb-6 text-center text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Criar conta
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nome */}
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Nome
            </label>
            <input
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-zinc-900 focus:border-black focus:outline-none dark:border-zinc-700 dark:text-zinc-50"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Senha
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-zinc-900 focus:border-black focus:outline-none dark:border-zinc-700 dark:text-zinc-50"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-black py-3 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Cadastrar
          </button>
        </form>

        {/* Rodapé */}
        <p className="mt-6 text-center text-sm text-zinc-500">
          Já tem conta?{" "}
          <a href="/login" className="font-medium text-black dark:text-white">
            Entrar
          </a>
        </p>
      </main>
    </div>
  );
}
