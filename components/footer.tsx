import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { product } from "@/lib/product-data";
import { AtSign, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const contactLink =
  "inline-flex items-center gap-2.5 font-medium text-ink transition-colors hover:text-accent";
const contactIcon = "h-4 w-4 shrink-0 text-accent";

export function Footer() {
  const { contact } = siteConfig;
  const whatsappHref = siteConfig.whatsapp.link();

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

        <address className="not-italic">
          <p className="font-data text-[11px] uppercase tracking-[0.16em] text-accent">
            Contact us
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {whatsappHref ? (
              <li>
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLink}
                >
                  <MessageCircle className={contactIcon} />
                  WhatsApp {siteConfig.whatsapp.display}
                </Link>
              </li>
            ) : null}
            <li>
              <a href={`tel:${contact.phone}`} className={contactLink}>
                <Phone className={contactIcon} />
                Call {contact.phoneDisplay}
              </a>
            </li>
            {contact.email ? (
              <li>
                <a href={`mailto:${contact.email}`} className={contactLink}>
                  <Mail className={contactIcon} />
                  {contact.email}
                </a>
              </li>
            ) : null}
            {contact.instagram ? (
              <li>
                <Link
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLink}
                >
                  <AtSign className={contactIcon} />
                  Instagram
                </Link>
              </li>
            ) : null}
            <li className="flex items-start gap-2.5">
              <MapPin className={contactIcon + " mt-0.5"} />
              <span className="max-w-[17rem] leading-relaxed">
                {contact.address}
                <br />
                <span className="text-ink-muted/70">{contact.hours}</span>
                <br />
                <Link
                  href={contact.outletsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:text-accent"
                >
                  {contact.outlets}
                </Link>
              </span>
            </li>
          </ul>
        </address>
      </div>

      <nav className="container-page flex flex-wrap gap-x-6 gap-y-3 border-t border-bg-border py-6">
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
