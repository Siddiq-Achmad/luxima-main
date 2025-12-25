import { Icons } from "@/components/icons/icons";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/gradient-noise-purple-azure-light.png";

const Hero = () => (
  <Section className="relative w-full overflow-hidden bg-dashed px-4 py-16 sm:px-16 sm:py-24 md:py-32 ">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="-z-10 absolute inset-0 h-full w-full"
    >
      <div
        className="absolute -z-10 inset-0 h-full w-full  bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]"
      />
      <Image
        src={heroImage}
        alt="Hero Background"
        height={600}
        width={704}
        className="pointer-events-none absolute z-10 right-0 bottom-0 h-[900px] w-[1004px] max-w-[1004px] translate-x-1/2 translate-y-1/2 select-none opacity-80 dark:opacity-100 "
        priority
      />
    </motion.div>
    <div className="mx-auto flex flex-col items-center justify-center gap-8">
      <motion.div
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{
         duration: 0.4,
         scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
         delay: 1
       }}
       className="my-2">
      <Button
        variant="outline"
        size="sm"
        className="group gap-4 bg-muted/70"
        asChild
      >
        <Link href={`/blog/`}>
          Read our latest announcement
          <Icons.arrowUpRight className="group-hover:-rotate-12 size-4 transition-transform" />
        </Link>
      </Button>
      </motion.div>
      <motion.div
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.4,
         scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
         delay: 0.2
       }}
       
       className="flex flex-col gap-4">
        <h1 className="max-w-2xl text-center font-regular text-5xl tracking-tighter md:text-7xl">
          The Future of
          <br />
          Business Starts Here
        </h1>
        <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
          Say goodbye to manual workflows and inefficient processes. SaasCN
          streamlines your business operations, making work intuitive,
          efficient, and tailored to your needs.
        </p>
      </motion.div>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{
         duration: 0.4,
         scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
         delay: 0.8
       }}
       className="flex flex-row gap-3">
        <Button
          size="lg"
          className="group gap-4 bg-muted/70 shadow-none"
          variant="outline"
          asChild
        >
          <Link href="/contact">
            Get in touch{" "}
            <MailIcon className="group-hover:-rotate-12 size-4 transition-transform" />
          </Link>
        </Button>
        <Button size="lg" className="group gap-4" asChild>
          <Link href="/signup">
            Sign up{" "}
            <Icons.arrowUpRight className="group-hover:-rotate-12 size-4 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </Section>
);

export default Hero;
