import { InView } from '@/components/in-view';
import { Section } from '@/components/section';

export default function About(): React.ReactElement {
  return (
    <Section className='grid divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0'>
      
      <div className='flex flex-col gap-2 px-6 py-10 md:py-14'>
        <h4 className='text-left font-regular text-3xl tracking-tighter md:text-5xl'>
          Our Story
        </h4>
      </div>

      <div className='gap-4 px-6 py-10 md:py-14'>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
        >
        <div className='prose dark:prose-invert w-full space-y-4'>
          
          <p className='text-md'>
            Business tools today are overwhelming - complex interfaces,
            disconnected systems, and manual processes that waste valuable time.
            We believed there had to be a better way. That's why we built
            SaasCN.
          </p>

          <p className='text-md'>
            What began as a simple workflow automation tool has evolved into a
            complete business operations platform. One that brings clarity to
            chaos and makes automation accessible to everyone.
          </p>
          
        </div>
        </InView>
      </div>
      
    </Section>
  );
}
