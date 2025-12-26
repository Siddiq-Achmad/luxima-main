"use client";

import { InView } from "@/components/in-view";
import { Section } from "@/components/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    title: "Transformasi Digital",
    description:
      "Tidak hanya fotografi, LUXIMA membantu kami berpikir bisnis dan sistem.",
    author: {
      name: "Hayden Bleasel",
      image: "https://github.com/haydenbleasel.png",
    },
  },
  {
    title: "Explosure yang lebih luas",
    description:
      "Sejak bergabung dengan LUXIMA.ID, exposure vendor kami meningkat dan sistem bisnis kami menjadi lebih rapi.",
    author: {
      name: "Lee Robinson",
      image: "https://github.com/leerob.png",
    },
  },
  {
    title: "Integrasi yang mudah",
    description:
      "Integrasi sistem bisnis kami menjadi lebih mudah dan efisien. Terima kasih LUXIMA.ID.",
    author: {
      name: "shadcn",
      image: "https://github.com/shadcn.png",
    },
  },
  {
    title: "Pelayanan terbaik",
    description:
      "Pelayanan keluhan kami ditanggapi dengan cepat dan profesional. Terima kasih LUXIMA.ID.",
    author: {
      name: "Pontus Abrahamsson",
      image: "https://github.com/pontusab.png",
    },
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <Section className="relative w-full pt-10">
      <div className="flex flex-col gap-10">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="flex flex-col gap-2 px-6">
            <h2 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
              Loved by the community
            </h2>
            <p className="max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
              See what others are saying about SaasCN.
            </p>
          </div>
        </InView>

        <Carousel
          setApi={setApi}
          className="w-full border-border border-t border-dashed"
        >
          <CarouselContent className="ml-0 divide-x divide-dashed divide-border">
            {testimonials.map((item, index) => (
              <CarouselItem
                className="pl-0 lg:basis-1/2"
                key={`${item.title}_${index}`}
              >
                <div className="flex aspect-video flex-col justify-between p-6 hover:bg-card lg:col-span-2">
                  <User className="h-8 w-8 stroke-1 transition-transform hover:rotate-12 hover:scale-125" />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-xl tracking-tight">{item.title}</h3>
                      <p className="max-w-xs text-base font-light tracking-tight text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <p className="flex flex-row items-center gap-2 text-sm">
                      <span className="text-muted-foreground">By</span>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={item.author.image} />
                        <AvatarFallback>??</AvatarFallback>
                      </Avatar>
                      <span>{item.author.name}</span>
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};

export default Testimonials;
