import { faqs, faqNote } from "@/lib/product-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { FaqAccordion } from "@/components/ui/faq-accordion";

export function FaqSection() {
  return (
    <section id="faq" className="bg-bg py-16 text-ink sm:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />

        <div className="mt-10">
          <FaqAccordion faqs={faqs} />
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-sm leading-relaxed text-ink-muted">{faqNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
