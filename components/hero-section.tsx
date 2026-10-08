import Image from "next/image";
import { FlaskConical } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ShopButton } from "@/components/ui/shop-button";
import { product, supportAreas, activeCount } from "@/lib/product-data";
import { galleryImages } from "@/lib/gallery-images";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-bg text-ink">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -left-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="animate-drift-slow absolute right-[-10%] top-[25%] h-[380px] w-[380px] rounded-full bg-highlight/10 blur-[130px]" />
      </div>
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="container-page relative grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:py-20">
        <div className="max-w-xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ink/5 px-3.5 py-1.5">
              <FlaskConical className="h-3.5 w-3.5 text-highlight" />
              <span className="font-data text-[11px] uppercase tracking-[0.16em] text-ink/80">
                Science-led nutritional support
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-balance sm:text-[3rem] lg:text-[3.3rem]">
              One Soft Chew. <span className="text-accent">Broad-Spectrum Areas of Support.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.98rem] font-semibold text-ink">
              {supportAreas.map((area, i) => (
                <li key={area} className="inline-flex items-center gap-3">
                  {i > 0 ? (
                    <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
                  ) : null}
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-ink-muted">
              {activeCount} key active ingredients in every chew, including
              glucosamine, chondroitin, MSM, wild Alaskan salmon oil and a
              1 billion CFU probiotic blend. A daily supplement for dogs,
              available in leading pet stores in Nigeria.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ShopButton size="lg">{product.ctas.primary}</ShopButton>
              <a
                href="#benefits"
                className="text-sm font-semibold text-ink/80 underline decoration-ink/30 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/60"
              >
                Explore the Benefits
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute inset-x-6 -bottom-6 h-full rounded-[2.5rem] bg-gradient-to-b from-accent/20 via-accent/5 to-transparent blur-2xl" />

          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.85)]">
            <Image
              src={galleryImages.heroDog.src}
              alt={galleryImages.heroDog.alt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover"
            />
          </div>

          <div className="facts-panel absolute -left-4 bottom-8 px-4 py-3 sm:-left-8">
            <p className="font-display text-xl font-extrabold leading-none text-label-ink">
              {activeCount}
            </p>
            <p className="mt-1 font-data text-[10px] uppercase leading-tight tracking-wide text-label-muted">
              Key active ingredients
              <br />
              per chew
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
