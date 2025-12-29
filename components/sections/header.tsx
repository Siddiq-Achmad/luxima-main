'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

import { ModeToggle } from '../theme-toggle'
import { LoaderPinwheelIcon } from '../ui/loader-pinwheel'
import { HugeiconsIcon } from '@hugeicons/react'
import { SecurityLockIcon } from '@hugeicons/core-free-icons'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services', children: [
    { href: '/services', label: 'Services' },
    { href: '/services/wedding-photography', label: 'Wedding Photography' },
    { href: '/services/studio-photography', label: 'Studio Photography' },
    { href: '/services/event-photography', label: 'Event Photography' },
    { href: '/services/product-photography', label: 'Product Photography' },
    { href: '/services/portrait-photography', label: 'Portrait Photography' },
    { href: '/services/wedding-consultant', label: 'Wedding Consultant' },
    { href: '/services/web-development', label: 'Web Development' },
    { href: '/services/sistem-informasi', label: 'Sistem Informasi' },
  ]},
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog', children: [
    { href: '/blog', label: 'Blog' },
    { href: '/newsletter', label: 'Newsletter' },
    { href: '/tags', label: 'Tags' },
    { href: '/categories', label: 'Categories' },
  ] },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all align-center justify-center flex items-center',
        scrolled
          ? 'bg-background/95 backdrop-blur border-b'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 ml-2">
          <LoaderPinwheelIcon className="mr-2 text-primary/40" />
          <span className="text-xl font-mono font-semibold text-primary">
            LUXIMA.ID
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            {navLinks.map(link => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary',
                      pathname === link.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ModeToggle />

          <Link href="/auth/signin" className="hidden md:block">
            <Button>
              <HugeiconsIcon
                icon={SecurityLockIcon}
                className="mr-2 size-4"
              />
              Sign In
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:max-w-sm px-2 py-4">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-sm font-medium',
                      pathname === link.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 border-t">
                  <Link href="/auth/signin">
                    <Button className="w-full">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
