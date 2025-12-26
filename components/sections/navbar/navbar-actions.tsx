
import { Button } from "@/components/ui/button";
import { SecurityLockIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { NavbarMobile } from "./navbar-mobile";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function NavbarActions() {
  return (
    <div className="flex items-center gap-3">
      {/* <ModeToggle /> */}
      <AnimatedThemeToggler />
      <Link href="/dashboard" className="hidden md:block">
        <Button>
          <HugeiconsIcon icon={SecurityLockIcon} className="mr-2 size-4" />
          Sign In
        </Button>
      </Link>
      <NavbarMobile />
    </div>
  );
}
