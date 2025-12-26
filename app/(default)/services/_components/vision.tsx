import { InView } from "@/components/in-view";
import { Section } from "@/components/section";

export default function Vision(): React.ReactElement {
  return (
    <Section className="grid divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0">

      <div className="gap-4 px-6 py-10 md:py-14">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="prose dark:prose-invert w-full space-y-4">
            <p className="text-base font-light tracking-tight text-muted-foreground">
              Membantu calon pengantin menemukan vendor wedding terbaik
              sekaligus membantu vendor wedding tumbuh melalui teknologi,
              sistem, dan strategi digital.
            </p>
            <p className="text-base font-light tracking-tight text-muted-foreground">
              Menjadi ekosistem wedding & teknologi yang membantu vendor dan
              bisnis kreatif tumbuh secara berkelanjutan.
            </p>

            <p className="text-base font-light tracking-tight text-muted-foreground ">
              Kami ingin menjadi platform digital yang memudahkan vendor wedding
              dan industri kreatif dalam menjalankan bisnis mereka.
            </p>
          </div>
        </InView>
      </div>
      <div className="flex flex-col gap-2 px-6 py-10 md:py-14 items-end mr-4">
        <h4 className="text-left font-regular text-3xl tracking-tighter md:text-5xl">
          Our Vision
        </h4>
      </div>

      
    </Section>
  );
}
