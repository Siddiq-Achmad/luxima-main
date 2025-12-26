"use client";

import { InView } from "@/components/in-view";
import { Section } from "@/components/section";
import { cva } from "class-variance-authority";
import {
  BarChart3 as BarChartIcon,
  HandCoins as HandCoinsIcon,
  Boxes as IntegrationsIcon,
  Users as UsersIcon,
} from "lucide-react";

// Create a variant for feature items
const featureItemVariants = cva(
  "group flex flex-col justify-between gap-10 p-6 last:border-border last:border-b last:border-dashed hover:bg-card hover:bg-card/80 sm:gap-22 md:gap-34 lg:gap-46",
  {
    variants: {
      size: {
        sm: "",
        lg: "lg:col-span-2",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const features = [
  {
    id: 1,
    Icon: HandCoinsIcon,
    title: "Spesialis Wedding & Teknologi",
    description:
      "Kami sangat paham dengan kebutuhan calon pengantin maupun vendor wedding dalam hal wedding dan teknologi.",
    size: "lg",
  },
  {
    id: 2,
    Icon: BarChartIcon,
    title: "Bukan Sekadar Listing",
    description:
      "Kami membangun ekosistem bisnis, bukan hanya direktori vendor. Kami juga ingin integrasi sistem dan bisnis secara digital.",
    size: "sm",
  },
  {
    id: 3,
    Icon: UsersIcon,
    title: "Siap Scale & Bertumbuh",
    description:
      "Sistem kami dirancang untuk kebutuhan hari ini dan masa depan. Berdasarkan data dan pengalaman kami, kami siap untuk menghadapi kemajuan teknologi.",
    size: "sm",
  },
  {
    id: 4,
    Icon: IntegrationsIcon,
    title: "Partner Jangka Panjang",
    description:
      "Fokus kami bukan transaksi satu kali, tapi pertumbuhan berkelanjutan. Kami membangun jaringan partner jangka panjang untuk memastikan kebutuhan calon pengantin dan vendor wedding tetap terpenuhi.",
    size: "lg",
  },
];

const Features = () => (
  <Section className="relative w-full pt-10">
    <div className="flex flex-col gap-10">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px 0px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
        
      >
        <div className="flex flex-col gap-2 px-6">
          <h2 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
            Why us?
          </h2>
          <p className="max-w-xl text-left font-light text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
             Kami membantu calon pengantin menemukan vendor wedding terbaik sekaligus membantu vendor
             wedding tumbuh melalui teknologi, sistem, dan strategi digital. 
          </p>
        </div>
      </InView>

      <div className="w-full border-border border-t border-dashed pb-4">
        <div className="grid grid-cols-1 divide-x divide-y divide-dashed divide-border text-left sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={featureItemVariants({
                size: feature.size as "sm" | "lg",
              })}
            >
              <feature.Icon className="h-8 w-8 stroke-1 transition-transform hover:rotate-12 hover:scale-125" />
              <div className="flex flex-col ">
                <h3 className="text-xl tracking-tight transition-all">
                  {feature.title}
                </h3>
                <p className="max-w-xs text-base font-light tracking-tight text-muted-foreground transition-all">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
export default Features;
