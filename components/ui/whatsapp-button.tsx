import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppButton({
  children = "Chat with us on WhatsApp",
  message,
  size = "md",
  className,
}: {
  children?: React.ReactNode;
  message?: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const href = siteConfig.whatsapp.link(message);
  if (!href) return null;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 font-body font-semibold text-accent transition-all duration-300 ease-out hover:bg-accent/10 active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
        className
      )}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
      {children}
    </Link>
  );
}
