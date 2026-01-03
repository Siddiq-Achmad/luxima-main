

import { Building, ChartBarStacked, Home, LayoutDashboard, LucideIcon, Newspaper, NotebookText, Package, Scroll, ScrollText, ServerIcon, StickyNote, Tag, Upload, User } from "lucide-react";

export type NavLinkItem = {
  href: string
  label: string
  description?: string
  icon?: LucideIcon
  children?: NavLinkItem[]
}



export const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Home', description: 'Home', icon: Home },
  { href: '/about', label: 'About Us', description: 'About Us', icon: User },
  { href: '/work', label: 'Work', description: 'Work', icon: Package },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services', label: 'Services', icon: ServerIcon },
      { href: '/services/wedding-photography', label: 'Wedding Photography', icon: ServerIcon },
      { href: '/services/studio-photography', label: 'Studio Photography', icon: ServerIcon },
      { href: '/services/event-photography', label: 'Event Photography',icon: ServerIcon },
      { href: '/services/product-photography', label: 'Product Photography', icon: ServerIcon },
      { href: '/services/portrait-photography', label: 'Portrait Photography', icon: ServerIcon },
      { href: '/services/wedding-consultant', label: 'Wedding Consultant', icon: ServerIcon },
      { href: '/services/web-development', label: 'Web Development', icon: ServerIcon },
      { href: '/services/sistem-informasi', label: 'Sistem Informasi', icon: ServerIcon },
    ],
  },
  { href: '/business', label: 'Business',
    children: [
      { href: '/business', label: 'Business', icon: Building  },
      { href: '/pricing', label: 'Pricing', icon: Building  },
      { href: '/business/b2b', label: 'B2B : Vendor', icon: Building },
      { href: '/business/b2c', label: 'B2C : Customer' , icon: Building},
      { href: '/onboarding', label: 'Onboarding', icon: Building },
      { href: '/faq', label: 'FAQ' },
    ]
   },
  {
    href: '/blog',
    label: 'Blog',
    children: [
      { href: '/blog', label: 'Blog', icon: StickyNote },
      { href: '/newsletter', label: 'Newsletter', icon: Newspaper },
      { href: '/tags', label: 'Tags', icon: Tag },
      { href: '/categories', label: 'Categories', icon: ChartBarStacked},
    ],
  },
  { href: '/docs', label: 'Documentation', children: [
    { href: '/docs', label: 'Docs', icon: NotebookText },
    { href: '/docs/api-reference', label: 'API Reference', icon: ScrollText },
    { href: '/docs/components', label: 'Components', icon: LayoutDashboard },
    { href: '/docs/changelog', label: 'Changelog', icon: Upload },
  ]},
  { href: '/contact', label: 'Contact' },

]
