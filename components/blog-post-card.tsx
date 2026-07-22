import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogPostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="overflow-hidden rounded-2xl border border-bg-border bg-bg-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-25px_rgba(0,0,0,0.7)]">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent"
          />
          <span className="absolute left-3 top-3 rounded-full bg-paper/95 px-3 py-1 font-data text-[10px] font-medium uppercase tracking-wide text-label-ink">
            {post.category}
          </span>
        </div>

        <div className="flex flex-col gap-2 p-5">
          <h3 className="font-display text-[1.05rem] font-bold leading-snug text-ink transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-[13.5px] leading-relaxed text-ink-muted">
            {post.excerpt}
          </p>
          <span className="mt-1 inline-flex items-center gap-1.5 font-data text-[11px] font-medium uppercase tracking-wide text-accent">
            Read article
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
