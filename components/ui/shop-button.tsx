import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function ShopButton({
  children,
  href = siteConfig.orderSectionHref,
  variant = "primary",
  size = "md",
  className,
  showIcon = true,
  onClick,
}: {
  children: React.ReactNode;
  /** Defaults to the on-page order section; pass a full URL to leave the site. */
  href?: string;
  variant?: "primary" | "outline" | "paper";
  size?: "md" | "lg";
  className?: string;
  showIcon?: boolean;
  onClick?: () => void;
}) {
  const external = /^https?:\/\//.test(href);
  const Icon = external ? ArrowUpRight : ArrowRight;

  return (
    <Link
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
        variant === "primary" &&
          "bg-accent text-label-ink shadow-[0_10px_30px_-10px_rgba(88,200,120,0.55)] hover:bg-highlight active:scale-[0.98]",
        variant === "outline" &&
          "border border-ink/20 text-ink hover:bg-ink/10 active:scale-[0.98]",
        variant === "paper" &&
          "bg-paper text-label-ink hover:bg-paper-soft active:scale-[0.98]",
        className
      )}
    >
      {children}
      {showIcon ? (
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}
