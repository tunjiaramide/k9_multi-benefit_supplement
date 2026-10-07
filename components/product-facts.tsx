import Image from "next/image";
import { PackageCheck } from "lucide-react";
import {
  productFacts,
  doesNotContain,
  inactiveIngredients,
  probioticStrains,
  activeCount,
  product,
} from "@/lib/product-data";
import { galleryImages } from "@/lib/gallery-images";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ProductFacts() {
  const keyFacts = productFacts.filter((row) => row.key);
  const otherFacts = productFacts.filter((row) => !row.key);

  return (
    <section id="product-facts" className="bg-bg py-16 text-ink sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow={`${activeCount} key active ingredients per chew`}
          title="Inside one 3.5 g chew."
          description="Every active ingredient and its amount, as listed on the product label."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.86fr] lg:items-start lg:gap-8">
          <Reveal delay={0.1} className="facts-panel overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-7">
              <div>
                <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-label-ink">
                  Supplement Facts
                </h3>
                <p className="mt-0.5 font-data text-xs text-label-muted">
                  {product.packageSize}
                </p>
              </div>
              <span className="hidden shrink-0 rounded-full bg-label-ink/[0.06] px-3 py-1.5 font-data text-[11px] font-medium uppercase tracking-wide text-label-muted sm:inline-block">
                Per {product.servingSize}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-px border-y-2 border-label-ink bg-label-ink/15 sm:grid-cols-3">
              {keyFacts.map((row) => (
                <div key={row.name} className="bg-paper px-5 py-4 sm:px-7">
                  <p className="font-display text-[1.6rem] font-extrabold leading-none tracking-tight text-label-ink">
                    {row.amount}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-snug text-label-muted">
                    {row.short ?? row.name}
                  </p>
                </div>
              ))}
            </div>
            <p className="px-5 pt-4 font-data text-[11px] uppercase tracking-wide text-label-muted sm:px-7">
              Plus {otherFacts.length} vitamins &amp; nutrients
            </p>
            <div className="mt-1">
              {otherFacts.map((row) => (
                <div
                  key={row.name}
                  className="facts-row flex items-center justify-between gap-4 px-5 py-2.5 sm:px-7"
                >
                  <span className="min-w-0 text-[13.5px] text-label-ink">{row.name}</span>
                  <span className="shrink-0 font-data text-[13px] font-medium text-label-ink">
                    {row.amount}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-label-ink px-5 py-3.5 sm:px-7">
              <p className="text-[12.5px] leading-snug text-label-muted">
                <span className="font-semibold text-label-ink">Glucosamine source:</span>{" "}
                shellfish. Chondroitin source: porcine.{" "}
                <span className="font-semibold text-label-ink">Probiotic blend:</span>{" "}
                {probioticStrains.join(", ")}.{" "}
                <span className="font-semibold text-label-ink">Inactive ingredients:</span>{" "}
                {inactiveIngredients.join(", ")}.
              </p>
              <p className="mt-2 flex items-center gap-2 text-[12.5px] leading-snug text-label-muted">
                <PackageCheck className="h-4 w-4 shrink-0" strokeWidth={2} />
                A nutritional supplement, not a substitute for a complete and
                balanced diet.
              </p>
            </div>
          </Reveal>

          <div className="flex min-w-0 flex-col gap-6">
            <div>
              <Reveal>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
                  Simple choices. Clear information.
                </h3>
              </Reveal>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {doesNotContain.map((item, i) => (
                  <Reveal
                    key={item.label}
                    delay={0.08 + i * 0.05}
                    className="flex items-center gap-3 rounded-xl border border-bg-border bg-bg-elevated px-4 py-3.5"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                      <item.icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <span className="text-[14px] font-medium text-ink">{item.label}</span>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal
              delay={0.2}
              className="relative aspect-square w-full overflow-hidden rounded-2xl border border-bg-border"
            >
              <Image
                src={galleryImages.infographic.src}
                alt={galleryImages.infographic.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal delay={0.28}>
              <p className="text-sm leading-relaxed text-ink-muted">
                For veterinary or medical questions about your dog&apos;s
                specific health needs, consult a qualified veterinarian.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
