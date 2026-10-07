import { MessageSquareHeart, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/product-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="bg-bg-soft py-16 text-ink sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Dog owners want the best for their dogs."
          align="center"
        />

        {testimonials.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={(i % 3) * 0.08}
                className="group relative flex flex-col rounded-2xl border border-bg-border bg-bg-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
              >
                <Quote
                  aria-hidden
                  className="absolute right-5 top-5 h-7 w-7 text-accent/10"
                  strokeWidth={1.5}
                />

                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      className={
                        star < t.rating
                          ? "h-3.5 w-3.5 fill-highlight text-highlight"
                          : "h-3.5 w-3.5 text-ink-muted/30"
                      }
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-bg-border pt-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/12 font-data text-xs font-semibold text-accent">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-muted">
                      {[t.location, t.dog, t.date].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal
            delay={0.1}
            className="mx-auto mt-12 flex max-w-md flex-col items-center rounded-2xl border border-dashed border-bg-border bg-bg-elevated px-8 py-10 text-center"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/12 text-accent">
              <MessageSquareHeart className="h-5 w-5" strokeWidth={2} />
            </span>
            <p className="mt-4 font-display text-base font-bold text-ink">
              Reviews coming soon
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
              We only publish genuine reviews from Nigerian dog owners who
              have bought the product. Already using it? We&apos;d love to
              hear how your dog is getting on.
            </p>
            <WhatsAppButton
              className="mt-5"
              message="Hello, I'd like to share a review of the PrimoScience K9 Multi-Benefit Supplement."
            >
              Share your review
            </WhatsAppButton>
          </Reveal>
        )}
      </div>
    </section>
  );
}
