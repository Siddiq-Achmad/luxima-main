'use client'

import Link from 'next/link'
import { LoaderPinwheelIcon } from '@/components/ui/loader-pinwheel'
import { cn } from '@/lib/utils'
import React from 'react'

export function Navbar({ children }: { children: React.ReactNode }) {

      const [scrolled, setScrolled] = React.useState(false)
    
      React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
      }, [])
  return (
    <header className={cn(
            'fixed top-0 z-50 w-full transition-all align-center justify-center flex items-center px-4',
            scrolled
              ? 'bg-background/85 backdrop-blur border-b'
              : 'bg-transparent'
          )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <LoaderPinwheelIcon className="mr-2 text-primary/80 " />
          <span className="text-xl font-mono font-semibold text-primary">
            LUXIMA.ID
          </span>
        </Link>

        {children}
      </div>
    </header>
  )
}
