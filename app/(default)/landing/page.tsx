'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Camera, Code, Megaphone, Sparkles, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'motion/react'

const HomePage = () => {
  const services = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Wedding, Event, Product, Studio & Portrait Photography dengan kualitas profesional.',
      features: ['Wedding Photography', 'Event Photography', 'Studio Photography', 'Product Photography']
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategi marketing digital yang efektif untuk meningkatkan brand awareness.',
      features: ['Social Media Marketing', 'Content Creation', 'Brand Strategy', 'Campaign Management']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Website dan sistem informasi custom untuk kebutuhan bisnis Anda.',
      features: ['Custom Website', 'E-Commerce', 'Web Application', 'Sistem Informasi']
    },
    {
      icon: Sparkles,
      title: 'Wedding Consultant',
      description: 'Konsultasi pernikahan lengkap untuk hari spesial Anda.',
      features: ['Wedding Planning', 'Venue Selection', 'Vendor Coordination', 'Day Coordination']
    }
  ]

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '300+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
    { value: '10+', label: 'Years Experience' }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpb3xlbnwwfHx8YmxhY2t8MTc2NTk2MDc2OHww&ixlib=rb-4.1.0&q=85"
            alt="LUXIMA.ID Studio"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Creative Studio<br />
              <span className="text-primary">LUXIMA.ID</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Photography, Digital Marketing, Web Development & Technology Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1614144492030-5e89a0dcc4d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHdvcmtzcGFjZXxlbnwwfHx8YmxhY2t8MTc2NTk2MDc3M3ww&ixlib=rb-4.1.0&q=85"
                  alt="About LUXIMA.ID"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-primary">LUXIMA.ID</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                LUXIMA.ID adalah creative studio yang bergerak dalam bidang industri kreatif. Kami menyediakan berbagai layanan mulai dari photography, digital marketing, hingga web development dan technology solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Dengan tim profesional dan berpengalaman, kami berkomitmen untuk memberikan hasil terbaik yang melebihi ekspektasi klien kami.
              </p>
              <div className="space-y-3 mb-8">
                {['Professional Team', 'Quality Results', 'On-Time Delivery', 'Customer Satisfaction'].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive creative solutions for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with our creative expertise
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white hover:bg-white/90 text-black">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
