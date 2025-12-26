import { BlurImage } from '@/components/blur-image';
import { Menu04Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { CalendarIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import Balancer from 'react-wrap-balancer';

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string | null;
  category: string;
  url: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  category,
  url,
}) => {
  return (
    <Link
      href={url}
      className='flex flex-col gap-4 bg-card/50 p-6 transition-colors hover:bg-card/80 min-h-full'
    >
      {image && (
        <div className='relative inline-flex items-center justify-center transition-transform hover:scale-105'>
          <BlurImage
            width={853}
            height={554}
            src={image}
            alt={title}
            className='relative rounded-lg'
          />
        </div>
      )}

      <div className='flex h-full flex-col justify-between gap-4'>
        <div className='flex-1 space-y-2'>
          <h2 className='font-medium text-lg md:text-xl lg:text-2xl'>
            <Balancer>{title}</Balancer>
          </h2>
          <p className='line-clamp-3 overflow-hidden text-ellipsis text-medium text-muted-foreground'>
            <Balancer>{description}</Balancer>
          </p>
        </div>
        <div className='flex flex-col justify-center gap-4'>
          <div className='group inline-flex items-center gap-2 text-muted-foreground text-sm'>
            <span className='inline-flex items-center gap-1 capitalize'>
              <HugeiconsIcon icon={Menu04Icon} className='size-4 transition-transform hover:scale-125' />
              {category}
            </span>
            <span>•</span>
            
          </div>
        </div>
      </div>
    </Link>
  );
};
