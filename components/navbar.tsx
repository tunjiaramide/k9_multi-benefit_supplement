"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { product } from "@/lib/product-data";
import { ShopButton } from "@/components/ui/shop-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // In-page anchors (e.g. "#benefits") only work from the homepage itself --
  // from any other route they need the "/" prefix so Next.js navigates home
  // first, then scrolls to the section.
  const resolveHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/95 backdrop-blur-md shadow-[0_8px_30px_-14px_rgba(0,0,0,0.6)]"
          : "bg-bg"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link href={isHome ? "#top" : "/"} className="font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">
          {product.brand} <span className="text-accent">K9</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={resolveHref(link.href)}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <ShopButton size="md">{product.ctas.nav}</ShopButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="lg:hidden border-t border-bg-border bg-bg">
          <div className="container-page flex flex-col gap-1 py-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink/85 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <ShopButton size="lg" className="mt-2 w-full">
              {product.ctas.nav}
            </ShopButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
