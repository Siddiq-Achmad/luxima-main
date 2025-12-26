import Separator from '@/components/separator';

import CTA from '../_components/cta';
import About from './_components/about';
import Hero from './_components/hero';
import Team from './_components/team';
import { CheckCircle, Globe, TrendingUp, Video } from 'lucide-react';
import Services from './_components/services';
import { cn } from '@/lib/utils';



export default function ServicesPage() {
  
  const servicesItems = [
    {
      title: 'Wedding Photography & Creative Services',
      description: 'Layanan fotografi profesional untuk: - Wedding & Prewedding Photography - Studio, Portrait & Family Photography - Product & Fashion Photography - Event & Corporate Documentation',
      icon: <Globe />,
      category: 'Photography',
      url: '/services/photography'
    },
    {
      title: 'Wedding Listing & Vendor Directory',
      description: 'Cari dan temukan vendor wedding terpercaya dalam satu platform: - Fotografer & Videografer Wedding \n- Makeup Artist (MUA) \n- Wedding Organizer \n- Dekorasi, Florist, Catering, Venue',
      icon: <TrendingUp />,
      category: 'Listing',
      url: '/services/listing'
    },
    {
      title: 'Technology & System Development',
      description: 'Kami membantu vendor dan bisnis wedding membangun: - Website profesional & SEO-friendly - Sistem admin & booking - Aplikasi web & mobile - Integrasi sistem & API',
      icon: <Video />,
      category: 'Development',
      url: '/services/development'
    },
    {
      title: 'Cloud, DevOps & Infrastruktur',
      description: 'Solusi teknologi untuk bisnis yang ingin stabil dan scalable: - Cloud Architecture (SaaS, PaaS, IaaS) - Server, Network & Security - CI/CD & AutomationWe provide wedding planning services, including venue selection, vendor coordination, and day coordination.',
      icon: <CheckCircle />,
      category: 'Cloud',
      url: '/services/cloud'
    },
  ];



  return (
    <>
      <Hero />
      <Separator />
      <Services services={servicesItems} />
      <Separator />
      <Team />
      <Separator />
      <CTA />
    </>
  );
}
