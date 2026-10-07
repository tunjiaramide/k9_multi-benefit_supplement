import { atAGlance, product } from "@/lib/product-data";
import { formatNaira } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function AtAGlance() {
  const items = [...atAGlance, { label: "Price per jar", value: formatNaira(product.price) }];

  return (
    <section aria-labelledby="at-a-glance" className="border-b border-bg-border bg-bg-soft text-ink">
      <div className="container-page py-10 sm:py-12">
        <Reveal>
          <h2
            id="at-a-glance"
            className="font-data text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            At a glance
          </h2>
        </Reveal>
        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bg-border bg-bg-border sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.04}
              className="flex flex-col-reverse justify-end gap-1.5 bg-bg-elevated px-4 py-5"
            >
              <dt className="text-[12.5px] leading-snug text-ink-muted">{item.label}</dt>
              <dd className="font-display text-[1.15rem] font-extrabold leading-tight tracking-tight text-ink">
                {item.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
