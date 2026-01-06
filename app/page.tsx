import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-12 px-16 py-32 text-center bg-white dark:bg-black">
        {/* Logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Logo"
          width={100}
          height={20}
          priority
        />

        {/* Texto principal */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bem-vindo ao sistema
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Faça login para acessar sua conta ou crie um cadastro para começar.
          </p>
        </div>

        {/* Ações */}
        <div className="flex w-full max-w-sm flex-col gap-4 sm:flex-row">
          <Link
            href="/login"
            className="flex h-12 w-full items-center justify-center rounded-full bg-black px-5 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Entrar
          </Link>

          <Link
            href="/register"
            className="flex h-12 w-full items-center justify-center rounded-full border border-black/10 px-5 transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            Criar conta
          </Link>
        </div>
      </main>
    </div>
  );
}
