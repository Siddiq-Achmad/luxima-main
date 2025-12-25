import Hero from '@/app/(default)/_components/hero';
import Separator from '@/components/separator';
import CTA from '../(default)/_components/cta';
import { Customers } from '../(default)/_components/customers';
import { FAQ } from '../(default)/_components/faq';
import Features from '../(default)/_components/features';
import Testimonials from '../(default)/_components/testimonials';


export default function Home() {
  
  return (
    <>
      <Hero />
      <Customers count={50} />
      <Separator />
      <Features />
      <Separator />
      <Testimonials />
      <Separator />
      <FAQ />
      <Separator />
      <CTA />
    </>
  );
}
