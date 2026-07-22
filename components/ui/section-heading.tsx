import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={cn(
              "font-data text-[11px] uppercase tracking-[0.18em]",
              tone === "dark" ? "text-accent" : "text-highlight"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "mt-3 font-display text-[1.9rem] leading-[1.1] font-extrabold tracking-tight text-balance sm:text-[2.4rem]",
            tone === "dark" ? "text-ink" : "text-label-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 text-[1.0625rem] leading-relaxed",
              tone === "dark" ? "text-ink-muted" : "text-label-muted"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
