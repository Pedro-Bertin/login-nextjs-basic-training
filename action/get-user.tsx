"use server";

import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function loginUser(nome: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { nome },
  });

  if (!user) {
    return { success: false, message: "Usuário ou senha não encontrados" };
  }

  if (user.password !== password) {
    return { success: false, message: "Usuário ou senha não encontrados" };
  }

  // ✅ cria sessão simples
  const cookieStore = await cookies();
  cookieStore.set("auth", String(user.id), {
    httpOnly: true,
    path: "/",
  });

  return {
    user,
  };
}
