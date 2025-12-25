'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import type { NavLinkItem } from './nav-links'

export function NavbarMenuItem({ item }: { item: NavLinkItem }) {
  const pathname = usePathname()

  const isActive =
    pathname === item.href ||
    item.children?.some(child => pathname === child.href)

  // ✅ Simple Link
  if (!item.children) {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink asChild >
          <Link
            href={item.href}
            className={cn(
              'block px-3 py-2 text-sm font-medium transition-colors',
                    'hover:bg-accent hover:text-accent-foreground',
                    pathname === item.href &&
                      'text-accent-foreground',
              isActive
                ? 'text-primary font-semibold'
                : 'text-muted-foreground font-medium'
            )}
          >
            {item.label}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    )
  }

  // ✅ Dropdown (Trigger + Content)
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary bg-transparent hover:bg-transparent focus:bg-transparent focus:text-primary focus:ring-0 focus:ring-offset-0',
          isActive && 'text-primary font-semibold'
        )}
      >
        {item.label}
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          {item.children.map(child => (
            <li key={child.href} className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  href={child.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm transition-colors',
                    'hover:bg-accent hover:text-accent-foreground',
                    pathname === child.href &&
                      'text-accent-foreground'
                  )}
                >
                  {child.label}
                </a>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
