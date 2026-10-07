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
   * Every "Shop Now" style button jumps to the order section on the
   * homepage; only the "Buy Now" button inside it leaves the site.
   */
  orderSectionHref: "/#offer",

  /**
   * "Buy Now" drops the chosen quantity straight into the Petshop Plus
   * (WooCommerce) cart. `productId` is this product's ID on petshopplus.ng.
   */
  cart: {
    url: process.env.NEXT_PUBLIC_CART_URL ?? "https://petshopplus.ng/cart/",
    productId: process.env.NEXT_PUBLIC_CART_PRODUCT_ID ?? "21961",
    link(quantity: number) {
      return `${this.url}?add-to-cart=${this.productId}&quantity=${quantity}`;
    },
  },

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

  /**
   * Customer-facing contact channels, taken from Petshop Plus's own contact
   * and shipping pages. `email` and `instagram` are left empty until the
   * owner confirms which ones to publish -- the footer only renders the
   * channels that are filled in.
   */
  contact: {
    phone: "+2349139368443",
    phoneDisplay: "0913 936 8443",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    address: "3 Abiola Segun Ajayi St, off Muri Okunola St, Victoria Island, Lagos",
    hours: "Mon–Fri 9am–8pm · Sat 10am–7pm",
    outlets: "11 Petshop Plus outlets across Lagos",
    outletsUrl: "https://petshopplus.ng/contact/",
  },

  whatsapp: {
    // Defaults to the WhatsApp line listed on petshopplus.ng's shipping page.
    number: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2347045584152").replace(/\D/g, ""),
    display: "0704 558 4152",
    defaultMessage:
      "Hello, I have a question about the PrimoScience K9 Multi-Benefit Supplement.",
    link(message?: string) {
      if (!this.number) return null;
      const text = encodeURIComponent(message ?? this.defaultMessage);
      return `https://wa.me/${this.number}?text=${text}`;
    },
  },
};

export type SiteConfig = typeof siteConfig;
