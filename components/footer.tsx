import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { product } from "@/lib/product-data";

export function Footer() {
  return (
    <footer className="bg-bg-elevated pt-14 text-ink-muted">
      <div className="container-page flex flex-col gap-8 pb-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-extrabold tracking-tight text-ink">
            {product.brand} <span className="text-accent">K9</span>
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed">
            {product.tagline}
          </p>
          <p className="mt-4 text-sm">
            Sold by{" "}
            <Link
              href={siteConfig.petshopPlus.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink transition-colors hover:text-accent"
            >
              {siteConfig.petshopPlus.name}
            </Link>
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 sm:justify-end">
          {siteConfig.petshopPlus.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-bg-border py-6">
        <div className="container-page flex flex-col gap-3 text-xs text-ink-muted/70">
          <p>
            {product.name} is a nutritional supplement and is not intended
            to diagnose, treat, cure, or prevent any disease. Consult your
            veterinarian with any health concerns.
          </p>
          <p>© {new Date().getFullYear()} {product.brand}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
