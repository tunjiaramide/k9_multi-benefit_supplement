import { trustStrip } from "@/lib/product-data";
import { Reveal } from "@/components/ui/reveal";

export function TrustStrip() {
  return (
    <section className="border-b border-bg-border bg-bg-soft text-ink">
      <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-4 sm:gap-4 sm:py-8">
        {trustStrip.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/15">
              <item.icon className="h-[18px] w-[18px]" strokeWidth={2} />
            </span>
            <div>
              <p className="font-display text-[0.85rem] font-bold uppercase tracking-wide">
                {item.title}
              </p>
              <p className="mt-0.5 text-[13px] text-ink-muted">{item.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
