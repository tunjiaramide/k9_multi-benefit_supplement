import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getAllPostsMeta, getPostBySlug } from "@/lib/blog";
import { ShopButton } from "@/components/ui/shop-button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { siteConfig } from "@/lib/site-config";
import { product } from "@/lib/product-data";

export function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${slug}`;
  const relatedPosts = getAllPostsMeta()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: product.brand },
    publisher: { "@type": "Organization", name: product.brand },
    mainEntityOfPage: url,
  };

  const faqJsonLd =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <article className="bg-bg py-14 text-ink sm:py-20">
      <div className="container-page">
      <div className="mx-auto max-w-[600px]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          Back to Blog
        </Link>

        <span className="mt-6 inline-block rounded-full bg-accent/12 px-3 py-1 font-data text-[11px] font-medium uppercase tracking-wide text-accent">
          {post.category}
        </span>

        <h1 className="mt-4 font-display text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-balance sm:text-[2.4rem]">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" strokeWidth={2} />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={2} />
            {post.readingMinutes} min read
          </span>
        </div>

        <div className="relative mx-auto mt-8 aspect-square w-full max-w-[340px] overflow-hidden rounded-2xl border border-bg-border">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="340px"
            className="object-cover"
          />
        </div>

        <div
          className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:font-bold"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {post.faqs && post.faqs.length > 0 ? (
          <div className="mt-14">
            <h2 className="font-display text-lg font-extrabold tracking-tight text-ink">
              Frequently asked questions
            </h2>
            <div className="mt-4">
              <FaqAccordion faqs={post.faqs} />
            </div>
          </div>
        ) : null}

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-bg-border bg-bg-elevated p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-base font-bold text-ink">
              Ready to support your dog&apos;s daily wellness?
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {product.name} — one daily chew for joints, digestion, skin & coat, and everyday nutrition.
            </p>
          </div>
          <ShopButton size="md" className="w-full shrink-0 sm:w-auto">
            {product.ctas.primary}
          </ShopButton>
        </div>

        {relatedPosts.length > 0 ? (
          <div className="mt-16">
            <h2 className="font-display text-lg font-extrabold tracking-tight text-ink">
              Keep reading
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-bg-border bg-bg-elevated p-3 transition-colors hover:border-accent/40"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-data text-[10px] font-medium uppercase tracking-wide text-accent">
                      {related.category}
                    </p>
                    <p className="mt-0.5 truncate font-display text-sm font-bold text-ink transition-colors group-hover:text-accent">
                      {related.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
    </article>
  );
}
