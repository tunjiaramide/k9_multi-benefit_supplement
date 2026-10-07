import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { ShopButton } from "@/components/ui/shop-button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { product } from "@/lib/product-data";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-bg py-20 text-ink sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute left-1/2 top-1/3 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]" />
      </div>
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[320px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="320px"
            className="object-contain"
          />
        </Reveal>

        <div className="text-center lg:text-left">
          <Reveal>
            <h2 className="font-display text-[2rem] font-extrabold leading-[1.12] tracking-tight text-balance sm:text-[2.6rem]">
              Give your dog daily multi-benefit support.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 font-data text-sm uppercase tracking-[0.14em] text-ink-muted">
              Joints · Digestion · Skin &amp; coat · Everyday wellness
            </p>
          </Reveal>
          <Reveal
            delay={0.16}
            className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <ShopButton size="lg">{product.ctas.final}</ShopButton>
            <WhatsAppButton size="lg">{product.ctas.whatsapp}</WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
