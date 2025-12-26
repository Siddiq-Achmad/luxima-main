import Separator from '@/components/separator';

import CTA from '../_components/cta';
import About from './_components/about';
import Hero from './_components/hero';
import Team from './_components/team';
import Updates from './_components/updates';
import TeamSection from './_components/team-member';
import Vision from './_components/vision';

export default function AboutPage() {
  const posts = [
    {
      url: '/about/updates/first-update',
      data: {
        title: 'First Update',
        description: 'This is the first update',
        date: new Date().toISOString(),
        author: 'John Doe',
        tags: ['update'],
      },
    },
    {
      url: '/about/updates/second-update',
      data: {
        title: 'Second Update',
        description: 'This is the second update',
        date: new Date().toISOString(),
        author: 'John Doe',
        tags: ['update'],
      },
    },
  ];

  const members = [
    {
        name: 'Liam Brown',
        role: 'Founder - CEO',
        avatar: 'https://alt.tailus.io/images/team/member-one.webp',
        link: '#',
    },
    {
        name: 'Elijah Jones',
        role: 'Co-Founder - CTO',
        avatar: 'https://alt.tailus.io/images/team/member-two.webp',
        link: '#',
    },
    {
        name: 'Isabella Garcia',
        role: 'Sales Manager',
        avatar: 'https://alt.tailus.io/images/team/member-three.webp',
        link: '#',
    },
    {
        name: 'Henry Lee',
        role: 'UX Engeneer',
        avatar: 'https://alt.tailus.io/images/team/member-four.webp',
        link: '#',
    },
    {
        name: 'Ava Williams',
        role: 'Interaction Designer',
        avatar: 'https://alt.tailus.io/images/team/member-five.webp',
        link: '#',
    },
    {
        name: 'Olivia Miller',
        role: 'Visual Designer',
        avatar: 'https://alt.tailus.io/images/team/member-six.webp',
        link: '#',
    },
]


  return (
    <>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Vision />
      <Separator />
      <Team />
      <TeamSection members={members} />
      <Separator />
      <Updates  />
      <CTA />
    </>
  );
}
