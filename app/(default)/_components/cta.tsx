import { Icons } from "@/components/icons/icons";
import { InView } from "@/components/in-view";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type React from "react";

export default function CTA(): React.ReactElement {
  return (
    <Section className="relative grid gap-8 px-4 py-10 sm:grid-cols-2 md:py-14 lg:px-6 lg:py-16">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
      >
        <h2 className="max-w-xl font-regular text-3xl md:text-5xl">
          Transform Your Business with LUXIMA.ID
        </h2>
      </InView>

      <div className="flex w-full items-center">
        <div className="max-w-xl space-y-4">
          <InView
            variants={{
              hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
          >
            <p className="text-muted-foreground text-sm font-light md:text-base">
              Bergabung bersama kami untuk membantu bisnis Anda menjadi lebih
              produktif dan berkembang. Dengan LUXIMA.ID, Anda dapat mengakses
              berbagai layanan yang dapat mempermudah urusan bisnis Anda.
            </p>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
          >
            <div className="flex flex-row gap-3">
              <Button size="lg" className="group gap-4" asChild>
                <Link href="/">
                  Get started for free{" "}
                  <Icons.arrowUpRight className="group-hover:-rotate-12 size-4 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="group gap-4 bg-transparent shadow-none"
                variant="outline"
                asChild
              >
                <Link href="/pricing">
                  <Icons.pricing className="group-hover:-rotate-12 size-4 transition-transform" />
                  See pricing{" "}
                </Link>
              </Button>
            </div>
          </InView>
        </div>
      </div>
    </Section>
  );
}
