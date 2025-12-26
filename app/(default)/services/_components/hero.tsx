import { Section } from '@/components/section';
import * as motion from "motion/react-client";
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

const Hero = () => (
  <Section className='relative w-full overflow-hidden px-4 py-16 sm:px-16 sm:py-24 md:py-32'>
    <div className='mx-auto flex flex-col items-center justify-center gap-8'>
      <motion.div
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{
         duration: 0.4,
         scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
       }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true }}
       className='flex flex-col items-center gap-6 text-center'>
        
        <h1 className='max-w-2xl bg-gradient-to-b bg-opacity-50 from-foreground to-muted-foreground/70 bg-clip-text font-regular text-4xl text-transparent tracking-tighter sm:text-6xl md:text-7xl'>
          <Balancer>Services </Balancer>
        </h1>
        <p className='mx-auto max-w-2xl text-lg font-light tracking-tight text-muted-foreground/90 md:text-xl'>
          <Balancer>
            Kami menyediakan berbagai layanan wedding dan digital bisnis
          </Balancer>
        </p>
      </motion.div>
    </div>
  </Section>
);

export default Hero;
