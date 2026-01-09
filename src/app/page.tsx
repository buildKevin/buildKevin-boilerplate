import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">buildKevin Boilerplate</h1>
          <p className="text-muted-foreground text-lg">
            A production-ready SaaS boilerplate with Next.js, tRPC, and Prisma
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>NextAuth.js with credentials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link href="/auth/login">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="w-full">
                    Register
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>tRPC</CardTitle>
              <CardDescription>End-to-end type safety</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/trpc-test">
                <Button className="w-full">
                  Test tRPC
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>Protected routes</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard">
                <Button variant="outline" className="w-full">
                  Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>Stack: Next.js 15 • TypeScript • tRPC • Prisma • NextAuth • shadcn/ui</p>
        </div>
      </div>
    </main>
  );
}
