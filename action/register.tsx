"use server";

import { prisma } from "@/lib/prisma";

export async function registerUser(nome: string, password: string) {
  const userExist = await prisma.user.findUnique({
    where: {
      nome,
    },
  });

  if (userExist) {
    return { success: false, message: "Usuário existente." };
  }

  await prisma.user.create({
    data: {
      nome,
      password,
    },
  });

  return { success: true };
}
