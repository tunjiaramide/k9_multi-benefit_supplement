"use client";

import { useEffect, useState } from "react";
import { product } from "@/lib/product-data";
import { formatNaira } from "@/lib/utils";
import { ShopButton } from "@/components/ui/shop-button";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "fixed inset-x-0 bottom-0 z-40 border-t border-bg-border bg-bg/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 ease-out lg:hidden " +
        (visible ? "translate-y-0" : "translate-y-full")
      }
    >
      <div className="flex items-center gap-3">
        <span className="font-display text-sm font-extrabold text-ink">
          {formatNaira(product.price)}
        </span>
        <ShopButton size="md" className="flex-1" showIcon={false}>
          {product.ctas.addToCart}
        </ShopButton>
      </div>
    </div>
  );
}
