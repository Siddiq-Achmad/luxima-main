import { Section } from "@/components/section";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import CTA from "../_components/cta";
import { ContactForm } from "./components/contact-form";
import { InView } from "@/components/in-view";
import * as motion from "motion/react-client";
import Separator from "@/components/separator";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { LocationMaps } from "./components/location";

export default function Contact(): React.ReactElement {
  return (
    <>
      <Section className="grid divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="flex flex-col justify-between gap-2 px-6 py-10 md:py-14 w-full h-full">
            <div className="px-4 py-6 gap-6">
              <h4 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl md:mb-4">
                Contact
              </h4>
              <p className="max-w-xl text-left font-light text-sm text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
                Siap memulai perjalanan digital Anda di industri wedding? <br />
                Diskusikan kebutuhan wedding, sistem, atau pengembangan bisnis
                Anda bersama tim kami.
              </p>
            </div>
            <div className="px-4 py-6 gap-4">
              <LocationMaps />
            </div>
            <div className="px-4 py-6 gap-4">
              <h4 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl md:mb-4">
                Let&apos;s Talk
              </h4>
              <div className="max-w-xl text-left text-sm font-light text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
                Kami sangat senang untuk membantu Anda. <br />
                Jangan ragu untuk menghubungi kami melalui email atau telepon.
                <ul className="mt-2 gap-2">
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Mail01Icon}
                      className="h-4 w-4 text-primary"
                    />
                    <a href="mailto:admin@luxima.id">admin@luxima.id</a>
                  </li>
                  <li className="flex gap-2 items-center">
                    <HugeiconsIcon
                      icon={Call02Icon}
                      className="h-4 w-4 text-primary"
                    />{" "}
                    <a href="https://wa.me/628990001664">+62 899 0001 664</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </InView>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            scale: {
              type: "spring",
              visualDuration: 0.4,
              bounce: 0.5,
              delay: 0.2,
            },
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex w-full items-center px-6 py-10 md:py-14"
        >
          <ContactForm />
        </motion.div>
      </Section>
      <Separator />
      <CTA />
    </>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const description =
    "Contact us for any inquiries, feedback, or support. We are here to assist you.";

  return createMetadata({
    title: "Contact",
    description,
    openGraph: {
      url: "/contact",
    },
    alternates: {
      canonical: "/contact",
    },
  });
}
