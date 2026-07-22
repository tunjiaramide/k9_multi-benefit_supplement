import { usageSteps } from "@/lib/product-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function UsageSection() {
  return (
    <section className="bg-bg-soft py-16 text-ink sm:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="How to Use" title="Simple to add to any routine." />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {usageSteps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.08}
              className="rounded-2xl border border-bg-border bg-bg-elevated p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/12 text-accent">
                <step.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-[1.05rem] font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                {step.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
