import { MessageSquareHeart, Star, Quote, ArrowUpRight } from "lucide-react";
import { testimonials } from "@/lib/product-data";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

function ReviewLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={siteConfig.googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 font-body text-sm font-semibold text-accent transition-all duration-300 ease-out hover:bg-accent/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${className}`}
    >
      <Star className="h-4 w-4" strokeWidth={2.2} />
      Share your review
      <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
    </a>
  );
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
          <>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((t, i) => {
                const byline = [t.name, t.location, t.dog, t.date].filter(Boolean).join(" · ");
                return (
                  <Reveal
                    key={t.title}
                    delay={(i % 4) * 0.06}
                    className="group relative flex flex-col rounded-2xl border border-bg-border bg-bg-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
                  >
                    <Quote
                      aria-hidden
                      className="absolute right-5 top-5 h-7 w-7 text-accent/10"
                      strokeWidth={1.5}
                    />

                    <div
                      className="flex items-center gap-0.5"
                      role="img"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
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

                    <h3 className="mt-4 font-display text-[0.98rem] font-bold leading-snug text-ink">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {byline ? (
                      <p className="mt-auto border-t border-bg-border pt-4 text-xs text-ink-muted">
                        {byline}
                      </p>
                    ) : null}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.1} className="mt-10 flex flex-col items-center text-center">
              <p className="text-[14px] text-ink-muted">
                Already using it? We&apos;d love to hear how your dog is getting on.
              </p>
              <ReviewLink className="mt-4" />
            </Reveal>
          </>
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
              Already using it? We&apos;d love to hear how your dog is getting
              on.
            </p>
            <ReviewLink className="mt-5" />
          </Reveal>
        )}
      </div>
    </section>
  );
}
