import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog-post-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

const description =
  "Guides on dog joint health, vitamins, probiotics, salmon oil, and everyday wellness for dog owners in Nigeria.";

export const metadata: Metadata = {
  title: "Dog Wellness Blog",
  description,
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Dog Wellness Blog",
    description,
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="bg-bg py-14 text-ink sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Dog Wellness Blog"
          title="Guides for a healthier, happier dog."
          description="Practical, conservative guidance on joint health, nutrition, digestion, and everyday routines — written for dog owners in Nigeria."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <BlogPostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
