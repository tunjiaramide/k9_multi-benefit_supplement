import { whyChoose } from "@/lib/product-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function WhyChoose() {
  return (
    <section id="why-choose" className="bg-bg-soft py-16 text-ink sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose It"
          title="Why choose PrimoScience K9?"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.06}
              className="flex items-start gap-4 border-t border-bg-border pt-6"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                <item.icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-[1.02rem] font-bold leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
