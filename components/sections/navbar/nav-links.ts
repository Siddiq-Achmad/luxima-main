

export type NavLinkItem = {
  href: string
  label: string
  description?: string
  icon?: string
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
      { href: '/services', label: 'Services', icon: 'Equal' },
      { href: '/services/wedding-photography', label: 'Wedding Photography', icon: 'Equal' },
      { href: '/services/studio-photography', label: 'Studio Photography', icon: 'Equal' },
      { href: '/services/event-photography', label: 'Event Photography',icon: 'Equal' },
      { href: '/services/product-photography', label: 'Product Photography', icon: 'Equal' },
      { href: '/services/portrait-photography', label: 'Portrait Photography', icon: 'Equal' },
      { href: '/services/wedding-consultant', label: 'Wedding Consultant', icon: 'Equal' },
      { href: '/services/web-development', label: 'Web Development', icon: 'Equal' },
      { href: '/services/sistem-informasi', label: 'Sistem Informasi', icon: 'Equal' },
    ],
  },
  { href: '/business', label: 'Business',
    children: [
      { href: '/business', label: 'Business',  },
      { href: '/pricing', label: 'Pricing' },
      { href: '/business/b2b', label: 'B2B : Vendor' },
      { href: '/business/b2c', label: 'B2C : Customer' },
      { href: '/onboarding', label: 'Onboarding' },
      { href: '/faq', label: 'FAQ' },
    ]
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
