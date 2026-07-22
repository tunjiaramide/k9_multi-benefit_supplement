import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPostsMeta } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog-post-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function BlogPreviewSection() {
  const posts = getAllPostsMeta().slice(0, 6);

  return (
    <section className="bg-bg py-16 text-ink sm:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="From the Blog"
            title="More to explore for your dog's wellness."
            description="Guides on joint health, nutrition, and everyday routines."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-highlight"
            >
              View all articles
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <BlogPostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
