'use client'

import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { navLinks } from './nav-links'
import { NavbarMenuItem } from './navbar-menu-item'



export function NavbarMenu() {
 
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex-wrap gap-4">
        {navLinks.map(item => (
          <NavbarMenuItem key={item.href} item={item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
