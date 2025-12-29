import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/animate-ui/radix/sidebar";
import UserAvatar from "./user-avatar";
import { createClient } from "@/lib/supabase/server";
import { ThemeSwitcher } from "./theme-switcher"; 
import Notifications from "./notification";

export async function SiteHeader() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Dashboard</h1>
        <div className="flex ml-auto  items-center gap-4 m-2">
          <span className="hidden lg:block text-sm text-muted-foreground">
            Signed in as {user?.email || "guest"}
          </span>
          <Separator
            orientation="vertical"
            className="mx-1 data-[orientation=vertical]:h-4"
          />
          <ThemeSwitcher />
          <Notifications />

          <Separator
            orientation="vertical"
            className="mx-1 data-[orientation=vertical]:h-4"
          />
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
