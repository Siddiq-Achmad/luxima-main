'use client';
import { Button } from "@/components/ui/button";
import { SecurityLockIcon, User03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { NavbarMobile } from "./navbar-mobile";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useUser } from "@/hooks/useUser";

export function NavbarActions() {
  const {user } = useUser();
  return (
    <div className="flex items-center gap-3">
      {/* <ModeToggle /> */}
      <AnimatedThemeToggler />
      <a href={process.env.NEXT_PUBLIC_ADMIN_URL} className="hidden md:block">
      {user ? (
        
          <Button>
            <HugeiconsIcon icon={User03Icon} className="mr-2 size-4" />
            Dashboard
          </Button>
        
      ):
      
        <Button>
          <HugeiconsIcon icon={SecurityLockIcon} className="mr-2 size-4" />
          Sign In
        </Button>
      
      }
      </a>
      <NavbarMobile />
    </div>
  );
}
