'use client'

import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { navLinks } from '@/lib/constants/nav-links'
import { NavbarMenuItem } from './navbar-menu-item'
import { NavbarMenu } from 'fumadocs-ui/layouts/home/navbar'



export function NavMenu() {
 
  return (
    <NavbarMenu className="hidden md:flex">
      <NavigationMenuList className="flex-wrap gap-4">
        {navLinks.map(item => (
          <NavbarMenuItem key={item.href} item={item} />
        ))}
      </NavigationMenuList>
    </NavbarMenu>
  )
}


