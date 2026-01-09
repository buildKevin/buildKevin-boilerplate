import { SessionProvider } from "next-auth/react";
import { DashboardHeader } from "@/components/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="min-h-screen">
        <DashboardHeader />
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </SessionProvider>
  );
}
