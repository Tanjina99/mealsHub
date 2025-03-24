import { AppSidebar } from "@/components/shared/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />

        <div className="flex-1">
          <header className="h-14 border-b px-4 flex items-center">
            <SidebarTrigger className="md:hidden" />
            <h1 className="ml-4 font-semibold">Admin Panel</h1>
          </header>

          <main className="p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
