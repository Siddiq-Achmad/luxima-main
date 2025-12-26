import { Section } from '@/components/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { ServiceCard } from './service-card';


interface ServiceItem {
  title: string;
  description: string;
  image?: string | null;
  category: string;
  url: string;
}

const Services = ( { services }: { services: ServiceItem[]  }) => {
  return (
    <Section className='relative w-full pt-10'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-2 px-6'>
          <h2 className='max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl'>
            Services
          </h2>
          {/* <p className='max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg'>
            See what others are saying about SaasCN.
          </p> */}
        </div>

        <Carousel className='w-full border-border border-t border-dashed'>
          <CarouselContent className='ml-0 divide-x divide-dashed divide-border'>
            {services.map((i) => {
              
              return (
                <CarouselItem
                  className='min-h-full pl-0 md:basis-1/2 lg:basis-1/4'
                  key={i.url}
                >
                  <ServiceCard
                    title={i.title}
                    description={i.description ?? ''}
                    image={i.image}
                    url={i.url}
                    category={i.category}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};

export default Services;
