<div align="center">

![buildKevin](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg#gh-dark-mode-only)
![buildKevin](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg#gh-dark-mode-only)

# buildKevin Boilerplate

**A production-ready SaaS boilerplate designed for speed, scalability, and clean architecture**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![tRPC](https://img.shields.io/badge/tRPC-11-2a484b?style=for-the-badge)](https://trpc.io/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Features](#-features) • [Quick Start](#-quick-start) • [Architecture](#-architecture) • [Stack](#-tech-stack)

</div>

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/kevin-stacchetti/buildKevin-boilerplate.git
cd buildKevin-boilerplate

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration

# Setup database
npm run db:push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start building! 🎉

---

## ✨ Features

| Feature | Description |
|:--------:|:-----------|
| 🔐 **Authentication** | NextAuth.js with credentials provider, ready for OAuth |
| 🔒 **Protected Routes** | Server-side route protection with NextAuth |
| 📡 **Type-Safe API** | tRPC for end-to-end type safety |
| 🎨 **Beautiful UI** | shadcn/ui components with Tailwind CSS |
| 🗄️ **Database** | Prisma ORM with PostgreSQL |
| ✅ **Validation** | Zod schema validation |
| 📱 **Responsive** | Mobile-first design |
| 🎯 **TypeScript** | Fully typed codebase |

---

## 🏗️ Architecture

```
buildKevin-boilerplate/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/
│   │   │   ├── auth/            # NextAuth routes
│   │   │   │   └── [...nextauth]/
│   │   │   ├── auth/            # Registration endpoint
│   │   │   │   └── register/
│   │   │   └── trpc/            # tRPC handler
│   │   │       └── [...trpc]/
│   │   ├── auth/                # Auth pages
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── dashboard/           # Protected dashboard
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── settings/
│   │   ├── trpc-test/           # tRPC test page
│   │   ├── layout.tsx           # Root layout with tRPC provider
│   │   ├── page.tsx             # Landing page
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── label.tsx
│   │   └── dashboard-header.tsx
│   ├── lib/
│   │   ├── trpc.ts              # tRPC client setup
│   │   ├── utils.ts             # Utilities (cn helper)
│   │   └── auth-types.ts        # Auth type definitions
│   └── server/
│       ├── auth.ts              # NextAuth configuration
│       ├── db.ts                # Prisma client
│       └── trpc/                # tRPC server setup
│           ├── init.ts
│           ├── trpc.ts
│           ├── server.ts
│           └── router/
│               ├── index.ts
│               └── example.ts
├── prisma/
│   └── schema.prisma            # Database schema
└── public/                      # Static assets
```

---

## 🔧 Tech Stack

### Frontend
| Technology | Purpose |
|:----------:|:--------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | High-quality React components |
| **Lucide Icons** | Beautiful icon set |

### Backend
| Technology | Purpose |
|:----------:|:--------|
| **tRPC** | Type-safe APIs without schemas |
| **NextAuth.js** | Complete authentication solution |
| **Prisma** | Type-safe ORM for database |
| **PostgreSQL** | Relational database |
| **Zod** | Schema validation |

### DevTools
| Technology | Purpose |
|:----------:|:--------|
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **TypeScript** | Static type checking |

---

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push database schema to Prisma
npm run db:studio    # Open Prisma Studio
```

---

## 🗄️ Database Schema

The boilerplate comes with a pre-configured schema for authentication:

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  password      String?
  accounts      Account[]
  sessions      Session[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Account { ... }
model Session { ... }
model VerificationToken { ... }
```

Easily extend it with your own models!

---

## 🎯 Getting Started Guide

### 1. Environment Setup

Create a `.env` file from `.env.example`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# NextAuth
NEXTAUTH_SECRET="your-secret-here-generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="http://localhost:3000"
```

### 2. Database Setup

```bash
# Push schema to database
npm run db:push

# (Optional) Open Prisma Studio to view data
npm run db:studio
```

### 3. Start Building

```bash
npm run dev
```

Visit the pages:
- **Home**: `http://localhost:3000`
- **Login**: `http://localhost:3000/auth/login`
- **Register**: `http://localhost:3000/auth/register`
- **Dashboard**: `http://localhost:3000/dashboard`
- **tRPC Test**: `http://localhost:3000/trpc-test`

---

## 🌟 Key Patterns

### Adding a New tRPC Route

```typescript
// src/server/trpc/router/yourRouter.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const yourRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { greeting: `Hello ${input.name}!` };
    }),
});
```

### Adding a New Page

```typescript
// src/app/your-page/page.tsx
export default function YourPage() {
  return <div>Your page content</div>;
}
```

### Using tRPC in Components

```typescript
"use client";
import { api } from "@/lib/trpc";

export default function YourComponent() {
  const { data, isLoading } = api.yourRouter.hello.useQuery({ name: "World" });

  if (isLoading) return <div>Loading...</div>;
  return <div>{data?.greeting}</div>;
}
```

---

## 📚 Next Steps

Ready to build your SaaS? Here's what you can add:

- [ ] **Stripe Integration** - Payments and subscriptions
- [ ] **Email Service** - Resend/SendGrid for transactional emails
- [ ] **OAuth Providers** - Google, GitHub, etc.
- [ ] **Team/Multi-tenancy** - Organization support
- [ ] **Webhooks** - Stripe webhooks handler
- [ ] **API Rate Limiting** - Upstash Redis
- [ ] **Error Tracking** - Sentry
- [ ] **Analytics** - Vercel Analytics, PostHog

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

MIT License - feel free to use this for your projects!

---

<div align="center">

Made with ❤️ by [Kevin Stacchetti](https://www.linkedin.com/in/kevin-stacchetti/)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Kevin_Stacchetti-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/kevin-stacchetti/)

</div>
