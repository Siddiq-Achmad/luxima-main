import { InView } from "@/components/in-view";
import { InlineLink } from "@/components/inline-link";
import { Section } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "Apa itu LUXIMA.ID?",
    answer:
      "LUXIMA.ID adalah platform wedding & teknologi yang menghubungkan calon pengantin dengan vendor wedding terpercaya, sekaligus membantu vendor mengembangkan bisnis secara profesional melalui sistem dan teknologi digital.",
  },
  {
    question: "Apakah LUXIMA.ID hanya untuk wedding?",
    answer:
      "Fokus utama kami adalah industri wedding, namun layanan fotografi, sistem, dan teknologi kami juga dapat digunakan untuk kebutuhan bisnis lain.",
  },
  {
    question: "Apakah semua vendor di LUXIMA.ID terpercaya?",
    answer:
      "Vendor yang terdaftar melalui proses kurasi dan verifikasi dasar untuk memastikan kualitas dan profesionalisme.",
  },
  {
    question: "Apakah saya bisa membandingkan beberapa vendor sekaligus?",
    answer:
      "Ya. Anda dapat melihat profil, portofolio, dan informasi vendor untuk membantu pengambilan keputusan.",
  },
  {
    question: "Apakah menggunakan LUXIMA.ID berbayar untuk pengantin?",
    answer:
      "Tidak. Pencarian vendor untuk calon pengantin gratis.",
  },
  {
    question: "Siapa saja yang bisa menjadi vendor di LUXIMA.ID?",
    answer:
      "Fotografer, videografer, MUA, wedding organizer, dekorasi, florist, catering, venue, dan vendor wedding lainnya.",
  },
  {
    question: "Apakah ada biaya pendaftaran vendor?",
    answer:
      "Kami menyediakan paket Gratis (Basic) serta paket berbayar sesuai kebutuhan pengembangan bisnis.",
  },
  {
    question: "Apakah LUXIMA.ID membantu promosi vendor?",
    answer:
      "Ya. Vendor akan mendapatkan exposure melalui platform, SEO (Search Engine Optimization), dan fitur promosi sesuai paket.",
  },
  {
    question: "Apakah tersedia sistem manajemen vendor?",
    answer:
      "Fitur sistem manajemen sedang dikembangkan dan akan tersedia bertahap.",
  },
  {
    question: "Bagaimana cara bergabung dengan LUXIMA.ID?",
    answer:
      "Silakan hubungi tim kami untuk informasi lebih lanjut. Anda dapat menghubungi tim kami melalui email, telepon, atau mengunjungi website kami.",
  },
];

export const FAQ = () => (
  <Section className="grid divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
    >
      <div className="flex flex-col gap-2 px-6 py-10 md:py-14">
        <h4 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
          Frequently Asked Questions
        </h4>
        <p className="max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
          Still have questions?{" "}
          <InlineLink href="/contact" className="no-underline">
            Contact Us
          </InlineLink>
        </p>
      </div>
    </InView>

    <Accordion
      type="single"
      collapsible
      className="w-full divide-dashed divide-border"
    >
      {faq.map((item, index) => (
        <AccordionItem
          key={`${item.question}-${index}`}
          value={`index-${index}`}
        >
          <AccordionTrigger className="rounded-none px-4 hover:bg-card hover:no-underline data-[state=open]:bg-card">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="p-4">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </Section>
);
