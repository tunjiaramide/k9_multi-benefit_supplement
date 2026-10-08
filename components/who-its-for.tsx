import { whoItsFor } from "@/lib/product-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="bg-bg py-16 text-ink sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Who It's For"
          title="Is PrimoScience K9 right for your dog?"
          description="It's made for dog owners who want one daily supplement that covers several areas of nutritional support."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whoItsFor.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 5) * 0.05}
              className="rounded-2xl border border-bg-border bg-bg-elevated p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/12 text-accent">
                <item.icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-[1rem] font-bold leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-muted">
                {item.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
