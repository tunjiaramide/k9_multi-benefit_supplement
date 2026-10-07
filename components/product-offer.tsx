"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Truck, LockKeyhole, MapPin, Store, CheckCircle2 } from "lucide-react";
import { product, benefitAreas, jarDuration } from "@/lib/product-data";
import { siteConfig } from "@/lib/site-config";
import { formatNaira } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ShopButton } from "@/components/ui/shop-button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const localTrust = [
  { label: "In stock and available in Nigeria", icon: MapPin },
  { label: "Home delivery in Lagos, shipping to other states", icon: Truck },
  { label: `Secure checkout with ${siteConfig.petshopPlus.name}`, icon: LockKeyhole },
  { label: `Or buy in store: ${siteConfig.contact.outlets}`, icon: Store },
];

export function ProductOffer() {
  const [qty, setQty] = useState(1);
  const total = product.price * qty;
  const orderMessage = `Hello, I want to order ${qty} ${qty === 1 ? "jar" : "jars"} of ${product.name} (${formatNaira(product.price)} each, total ${formatNaira(total)}).`;

  return (
    <section id="offer" className="bg-bg-soft py-16 text-ink sm:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="The Offer" title="Daily multi-benefit support, one jar." />

        <Reveal
          delay={0.1}
          className="mt-10 grid gap-0 overflow-hidden rounded-[1.75rem] border border-bg-border bg-bg-elevated lg:grid-cols-2"
        >
          <div className="relative aspect-square bg-paper lg:aspect-auto">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10">
            <span className="font-data text-[11px] uppercase tracking-[0.16em] text-accent">
              {product.brand}
            </span>
            <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              {product.packageSize} · {product.flavor}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="font-display text-3xl font-extrabold text-ink">
                {formatNaira(product.price)}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">
                <CheckCircle2 className="h-3.5 w-3.5" /> In stock in Nigeria
              </span>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {benefitAreas.map((b) => (
                <li
                  key={b.id}
                  className="rounded-full bg-ink/5 px-3 py-1 font-data text-[10px] uppercase tracking-wide text-ink-muted"
                >
                  {b.title}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Quantity
              </p>
              <div className="flex items-center rounded-full border border-bg-border">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-9 w-9 place-items-center text-ink transition-colors hover:text-accent"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-8 text-center font-data text-sm text-ink">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-9 w-9 place-items-center text-ink transition-colors hover:text-accent"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <p className="mt-4 font-data text-[12px] text-ink-muted">
              From ≈{formatNaira(jarDuration[0].costPerDay)} a day at 1 chew
              daily · a jar lasts ≈{jarDuration[0].days} days
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <ShopButton size="lg" href={siteConfig.cart.link(qty)}>
                {product.ctas.buyNow}
              </ShopButton>
              <WhatsAppButton size="lg" message={orderMessage}>
                {product.ctas.orderWhatsapp}
              </WhatsAppButton>
            </div>
            <p className="mt-3 text-[13px] text-ink-muted">
              Buy Now adds {qty} {qty === 1 ? "jar" : "jars"} (
              {formatNaira(total)}) to your {siteConfig.petshopPlus.name}{" "}
              cart. Prefer to chat? Send the same order on WhatsApp and
              we&apos;ll take it from there.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 border-t border-bg-border pt-5 text-[13px] text-ink-muted sm:grid-cols-2">
              {localTrust.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
