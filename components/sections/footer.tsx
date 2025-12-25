'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Call02Icon, Facebook01Icon, InstagramIcon, Mail02Icon, MapPinpoint02Icon, NewTwitterRectangleIcon, TiktokIcon, YoutubeIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { LoaderPinwheelIcon } from '../ui/loader-pinwheel'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Wedding Photography',
    'Studio Photography',
    'Event Photography',
    'Product Photography',
    'Portrait Photography',
    'Wedding Consultant',
    'Web Development',
    'Sistem Informasi'
  ]

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { icon: Facebook01Icon, href: '#', label: 'Facebook' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: TiktokIcon, href: '#', label: 'Tiktok' },
    { icon: NewTwitterRectangleIcon, href: '#', label: 'X' },
    { icon: YoutubeIcon, href: '#', label: 'Youtube' },
  ]

  return (
    <footer className={cn('container mx-auto px-4 py-12','border-border border-b border-dashed',)}>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-transparent flex items-center justify-center">
                {/* <span className="text-xl font-semibold text-primary-foreground">L</span> */}
                <LoaderPinwheelIcon />
              </div>
              <span className="text-xl font-mono text-primary">LUXIMA.ID</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Creative Studio yang bergerak dalam bidang industri kreatif, photography, digital marketing, web development & technology.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                {/* <MapPin className="h-4 w-4 text-primary" /> */}
                <HugeiconsIcon icon={MapPinpoint02Icon} className="h-4 w-4 text-primary" />
                <span>Aceh, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* <Mail className="h-4 w-4 text-primary" /> */}
                <HugeiconsIcon icon={Mail02Icon} className="h-4 w-4 text-primary" />
                <span>hello@luxima.id</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* <Phone className="h-4 w-4 text-primary" /> */}
                <HugeiconsIcon icon={Call02Icon} className="h-4 w-4 text-primary" />
                <span>+62 899 0001 664</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Follow kami di social media untuk update terbaru.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <HugeiconsIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} LUXIMA.ID. All rights reserved.</p>
        </div>
     
    </footer>
  )
}

export default Footer
