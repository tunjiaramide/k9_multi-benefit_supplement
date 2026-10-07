import { dosingRows, jarDuration, product, usageSteps } from "@/lib/product-data";
import { formatNaira } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function UsageSection() {
  return (
    <section id="how-to-use" className="bg-bg py-16 text-ink sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Daily Serving"
          title="How much to give, and how long a jar lasts."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal className="rounded-2xl border border-bg-border bg-bg-elevated p-6 sm:p-7">
            <h3 className="font-display text-[1.15rem] font-bold text-ink">
              Daily serving by dog weight
            </h3>

            {dosingRows.length > 0 ? (
              <table className="mt-5 w-full text-left text-[14px]">
                <thead>
                  <tr className="border-b border-bg-border font-data text-[11px] uppercase tracking-wide text-ink-muted">
                    <th scope="col" className="pb-2.5 font-medium">Dog&apos;s weight</th>
                    <th scope="col" className="pb-2.5 text-right font-medium">Daily serving</th>
                  </tr>
                </thead>
                <tbody>
                  {dosingRows.map((row) => (
                    <tr key={row.weight} className="border-b border-bg-border last:border-b-0">
                      <td className="py-3 text-ink">{row.weight}</td>
                      <td className="py-3 text-right font-data text-ink">{row.serving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
                The daily serving depends on your dog&apos;s weight and is
                printed on the directions panel of every jar. Want to know
                the serving for your dog before you buy? Send us your
                dog&apos;s weight and we&apos;ll confirm it for you.
              </p>
            )}

            <WhatsAppButton
              className="mt-6"
              message="Hello, what is the daily serving of PrimoScience K9 Multi-Benefit Supplement for my dog? My dog weighs: "
            >
              Ask about your dog&apos;s serving
            </WhatsAppButton>
          </Reveal>

          <Reveal delay={0.08} className="rounded-2xl border border-bg-border bg-bg-elevated p-6 sm:p-7">
            <h3 className="font-display text-[1.15rem] font-bold text-ink">
              How long one jar lasts
            </h3>
            <p className="mt-1.5 text-[13.5px] text-ink-muted">
              Based on approx. {product.chewCount} soft chews per jar at{" "}
              {formatNaira(product.price)}.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {jarDuration.map((row) => (
                <div
                  key={row.chewsPerDay}
                  className="rounded-xl border border-bg-border bg-bg-soft px-3 py-4 text-center"
                >
                  <p className="font-data text-[10.5px] uppercase tracking-wide text-ink-muted">
                    {row.chewsPerDay} {row.chewsPerDay === 1 ? "chew" : "chews"} / day
                  </p>
                  <p className="mt-2 font-display text-[1.7rem] font-extrabold leading-none text-ink">
                    ≈{row.days}
                  </p>
                  <p className="mt-1 text-[12.5px] text-ink-muted">days</p>
                  <p className="mt-3 border-t border-bg-border pt-2.5 font-data text-[11px] text-accent">
                    ≈{formatNaira(row.costPerDay)}/day
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] leading-relaxed text-ink-muted">
              Examples only. Always follow the serving on the jar for your
              dog&apos;s weight.
            </p>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {usageSteps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.08}
              className="flex items-start gap-3.5 rounded-2xl border border-bg-border bg-bg-elevated p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                <step.icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-[0.98rem] font-bold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink-muted">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
