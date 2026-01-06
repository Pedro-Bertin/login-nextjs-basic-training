# 🔐 Sistema de Login e Cadastro — Next.js + Prisma + PostgreSQL

Projeto de estudo focado em **autenticação básica**, integração com **banco de dados PostgreSQL** usando **Prisma**, e uso de **Server Actions** do Next.js moderno.

O objetivo principal é **praticar a comunicação entre frontend e backend**, entender o fluxo de login/cadastro e trabalhar com **cookies de sessão**.

---

## 🚀 Tecnologias Utilizadas

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Server Actions**
- **Cookies (next/headers)**
- **Tailwind CSS**

---

## 📌 Funcionalidades

- ✅ Cadastro de usuário
- ✅ Login com validação no banco
- ✅ Criação de sessão simples via cookie
- ✅ Logout (remoção do cookie)
- ✅ Redirecionamento após login
- ✅ Mensagens de erro (usuário não encontrado / senha inválida)
- ✅ ID automático com UUID no banco

---

## 🗂️ Estrutura do Projeto

app/
├─ actions/
│ ├─ get-user.ts # Login (verificação de usuário)
│ ├─ register.ts # Cadastro de usuário
│ └─ logout.ts # Logoff (remove cookie)
│
├─ login/
│ └─ page.tsx # Tela de login
│
├─ register/
│ └─ page.tsx # Tela de cadastro
│
├─ dashboard/
│ └─ page.tsx # Tela protegida (pós-login)
│
└─ page.tsx # Home
│
lib/
└─ prisma.ts # Conexão Prisma
│
prisma/
└─ schema.prisma # Model do banco


---

## 🧠 Model do Banco de Dados

```prisma
model User {
  id        String   @id @default(uuid()) @db.Uuid
  nome      String   @unique
  password  String
  createdAt DateTime @default(now())
}

