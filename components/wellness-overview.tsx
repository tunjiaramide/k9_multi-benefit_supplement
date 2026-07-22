import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { wellnessAreas } from "@/lib/product-data";
import { galleryImages } from "@/lib/gallery-images";

export function WellnessOverview() {
  return (
    <section className="relative overflow-hidden bg-bg-soft text-ink">
      <div className="container-page relative grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="relative order-2 aspect-square overflow-hidden rounded-2xl lg:order-1">
          <Image
            src={galleryImages.rottweilerPaw.src}
            alt={galleryImages.rottweilerPaw.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="font-data text-[11px] uppercase tracking-[0.18em] text-accent">
              Everyday Wellness
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 font-display text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-balance sm:text-[2.3rem]">
              Your dog&apos;s wellness is more than one thing.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-ink-muted">
              Dog owners care about a lot at once — mobility, digestion, skin
              and coat, daily nutrition, general wellness. PrimoScience K9
              brings nutritional support for all of it into one daily soft
              chew, so it&apos;s easier to make part of your dog&apos;s routine.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {wellnessAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-ink/15 px-3.5 py-1.5 font-data text-[11px] uppercase tracking-wide text-ink/75"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
