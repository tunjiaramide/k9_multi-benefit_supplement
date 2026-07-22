export const siteConfig = {
  brand: "PrimoScience",
  name: "PrimoScience K9",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://primoscience.ng",
  canonicalPath: "/k9-multi-benefit-supplement/",
  locale: "en_NG",

  navLinks: [
    { label: "Benefits", href: "#benefits" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Product Facts", href: "#product-facts" },
    { label: "Pricing", href: "#offer" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "#faq" },
  ],

  /**
   * The live storefront this product currently sells on. Checkout/cart
   * actions point here by default and can be swapped for a direct
   * checkout flow later via env var, without touching components.
   */
  checkoutUrl:
    process.env.NEXT_PUBLIC_CHECKOUT_URL ??
    "https://petshopplus.ng/product/k9-multi-benefit-supplement/",

  /**
   * The product is sold and fulfilled by Petshop Plus. These pages live on
   * their site (petshopplus.ng), not this one -- see CLAUDE.md for why
   * footer legal/company links point out rather than duplicating content.
   */
  petshopPlus: {
    name: "Petshop Plus",
    url: "https://petshopplus.ng/",
    links: [
      { label: "About Us", href: "https://petshopplus.ng/about-us/" },
      { label: "Shipping & Handling", href: "https://petshopplus.ng/shipping-and-handling/" },
      { label: "Refund Policy", href: "https://petshopplus.ng/refund-policy/" },
      { label: "Terms of Service", href: "https://petshopplus.ng/terms-of-service/" },
      { label: "Contact", href: "https://petshopplus.ng/contact/" },
    ],
  },

  whatsapp: {
    number: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
    defaultMessage:
      "Hello PrimoScience, I'd like to order the K9 Multi-Benefit Supplement.",
    link(message?: string) {
      if (!this.number) return null;
      const text = encodeURIComponent(message ?? this.defaultMessage);
      return `https://wa.me/${this.number}?text=${text}`;
    },
  },
};

export type SiteConfig = typeof siteConfig;
