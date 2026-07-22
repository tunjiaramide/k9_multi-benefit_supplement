import { benefitAreas } from "@/lib/product-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-bg py-16 text-ink sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Multi-Benefit System"
          title="One formula. Multiple areas of support."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefitAreas.map((area, i) => (
            <Reveal
              key={area.id}
              delay={(i % 4) * 0.06}
              className="group rounded-2xl border border-bg-border bg-bg-elevated p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/12 text-accent transition-transform duration-300 group-hover:scale-110">
                <area.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-[1.05rem] font-bold text-ink">
                {area.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                {area.copy}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {area.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full bg-ink/5 px-2.5 py-1 font-data text-[10px] uppercase tracking-wide text-ink-muted"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
