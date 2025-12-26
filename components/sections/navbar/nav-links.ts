export type NavLinkItem = {
  href: string
  label: string
  description?: string
  children?: NavLinkItem[]
}

export const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Home', description: 'Home' },
  { href: '/about', label: 'About Us', description: 'About Us' },
  { href: '/work', label: 'Work', description: 'Work' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services', label: 'Services' },
      { href: '/services/wedding-photography', label: 'Wedding Photography' },
      { href: '/services/studio-photography', label: 'Studio Photography' },
      { href: '/services/event-photography', label: 'Event Photography' },
      { href: '/services/product-photography', label: 'Product Photography' },
      { href: '/services/portrait-photography', label: 'Portrait Photography' },
      { href: '/services/wedding-consultant', label: 'Wedding Consultant' },
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/sistem-informasi', label: 'Sistem Informasi' },
    ],
  },
  {
    href: '/blog',
    label: 'Blog',
    children: [
      { href: '/blog', label: 'Blog' },
      { href: '/newsletter', label: 'Newsletter' },
      { href: '/tags', label: 'Tags' },
      { href: '/categories', label: 'Categories' },
    ],
  },
  { href: '/contact', label: 'Contact' },
]
