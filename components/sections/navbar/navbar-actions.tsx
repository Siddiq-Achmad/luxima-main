'use client';
import { Button } from "@/components/ui/button";
import { SecurityLockIcon, User03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useUser } from "@/hooks/useUser";
import Link from "next/link";

export function NavbarActions() {
  const {user } = useUser();
  const adminUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3002' : 'https://admin.luxima.id'

  return (
    <div className="flex items-center gap-2">
      {/* <ModeToggle /> */}
      
      <AnimatedThemeToggler />
      <Link href={adminUrl} className="py-2">
      {user && user.email ? (
        
          <Button type="button" >
            <HugeiconsIcon icon={User03Icon} className="mr-2 size-4" />
            {user.email}
          </Button>
      ):(
        
        <Button type="button">
          <HugeiconsIcon icon={SecurityLockIcon} className="mr-2 size-4" />
          Sign In
        </Button>
       
      )}
       </Link>
    </div>
  );
}
