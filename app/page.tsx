import { HeroSection } from "@/components/hero-section";
import { TrustStrip } from "@/components/trust-strip";
import { WellnessOverview } from "@/components/wellness-overview";
import { BenefitsSection } from "@/components/benefits-section";
import { IngredientSystem } from "@/components/ingredient-system";
import { ProductFacts } from "@/components/product-facts";
import { UsageSection } from "@/components/usage-section";
import { BlogPreviewSection } from "@/components/blog-preview-section";
import { Testimonials } from "@/components/testimonials";
import { ProductOffer } from "@/components/product-offer";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { siteConfig } from "@/lib/site-config";
import { product, faqs } from "@/lib/product-data";

export default function Home() {
  const canonicalUrl = `${siteConfig.url}${siteConfig.canonicalPath}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteConfig.url}${product.image}`,
    brand: { "@type": "Brand", name: product.brand },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: product.currency,
      price: product.price,
      availability: `https://schema.org/${product.availability}`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WellnessOverview />
      <BenefitsSection />
      <IngredientSystem />
      <ProductFacts />
      <UsageSection />
      <BlogPreviewSection />
      <Testimonials />
      <ProductOffer />
      <FaqSection />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
