import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/lib/trpc";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "buildKevin Boilerplate",
  description: "A production-ready SaaS boilerplate with Next.js, tRPC, and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
