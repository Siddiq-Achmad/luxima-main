import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import CTA from '../_components/cta';
import { ContactForm } from './components/contact-form';
import { InView } from '@/components/in-view';
import * as motion from "motion/react-client";

export default function Contact(): React.ReactElement {
  return (
    <>
      <Section className='grid divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0'>
        <InView
              variants={{
                hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
            >
        <div className='flex flex-col gap-2 px-6 py-10 md:py-14'>
          <h4 className='max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl'>
            Contact
          </h4>
          <p className='max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg'>
            Let us know if you have any questions or feedback. We are here to
            help you.
          </p>
        </div>
        </InView>

        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5, delay: 0.2 },
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='flex w-full items-center px-6 py-10 md:py-14'>
          <ContactForm />
        </motion.div>
      </Section>
      <CTA />
    </>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const description =
    'Contact us for any inquiries, feedback, or support. We are here to assist you.';

  return createMetadata({
    title: 'Contact',
    description,
    openGraph: {
      url: '/contact',
    },
    alternates: {
      canonical: '/contact',
    },
  });
}
