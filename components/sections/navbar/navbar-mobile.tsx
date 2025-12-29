"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetFooter,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks } from "./nav-links";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HugeiconsIcon } from "@hugeicons/react";
import { SecurityLockIcon, User03Icon } from "@hugeicons/core-free-icons";
import { useUser } from "@/hooks/useUser";
export function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="flex flex-col gap-4 p-4">
          <SheetHeader>
            <SheetTitle className="uppercase text-center">Menu</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          {/* <div className="flex flex-col gap-2">
            {navLinks.map(item =>
              item.children ? (
                <div key={item.label} className="space-y-2">
                  <div className="font-medium text-lg hover:font-semibold">
                    {item.label}
                  </div>

                  {item.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block pl-4 text-sm text-muted-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-medium text-lg hover:font-semibold"
                >
                  {item.label}
                </Link>
              )
            )}
          </div> */}
          <Accordion type="multiple" className="w-full px-2 py-2 gap-2">
            {navLinks.map((item) =>
              item.children ? (
                <AccordionItem key={item.label} value={item.label}>
                  <AccordionTrigger className="text-sm font-medium hover:bg-accent">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-sm  font-light no-underline hover:bg-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className=" text-sm font-medium hover:bg-accent"
                >
                  {item.label}
                </Link>
              )
            )}
          </Accordion>

          {/* Sign In (Mobile) */}
          <SheetFooter>
            {/* <Button asChild className="mt-auto">
            <Link href="/auth/sign-in">
              Sign In
            </Link>
          </Button> */}
            {user ? (
              <Link href="/dashboard" className="mx-auto w-full">
                <Button className="w-full">
                  <HugeiconsIcon icon={User03Icon} className="mr-2 size-4" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link href="/dashboard" className="mx-auto w-full">
                <Button className="w-full">
                  <HugeiconsIcon
                    icon={SecurityLockIcon}
                    className="mr-2 size-4"
                  />
                  Sign In
                </Button>
              </Link>
            )}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
