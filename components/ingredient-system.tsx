import Image from "next/image";
import { ingredientSystem } from "@/lib/product-data";
import { galleryImages } from "@/lib/gallery-images";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function IngredientSystem() {
  return (
    <section id="ingredients" className="bg-bg-soft py-16 text-ink sm:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <SectionHeading
            eyebrow="Why Each Ingredient Is Included"
            title="What's inside, and why."
            description="A short, plain explanation of what each key ingredient is and the role it plays in the formula."
          />
          <Reveal delay={0.1} className="relative mt-8 aspect-square overflow-hidden rounded-2xl">
            <Image
              src={galleryImages.benefitsBurst.src}
              alt={galleryImages.benefitsBurst.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
          {ingredientSystem.map((entry, i) => (
            <Reveal
              key={entry.name}
              delay={(i % 4) * 0.05}
              className="flex items-start gap-3 rounded-xl border border-bg-border bg-bg-elevated p-4"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                <entry.icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[0.95rem] font-bold text-ink">
                  {entry.name}
                </h3>
                <p className="mt-0.5 font-data text-[11px] uppercase tracking-wide text-accent">
                  {entry.amount}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink">
                  {entry.what}
                </p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink-muted">
                  {entry.why}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
