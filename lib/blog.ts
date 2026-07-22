import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

/**
 * Blog content lives as Markdown files in content/blog/, not a CMS.
 * At 6-10 articles, a headless WordPress integration would be pure
 * boilerplate for no SEO benefit -- see CLAUDE.md for the full reasoning.
 * If this ever grows into dozens of posts written by non-technical
 * authors, that's the point to revisit WordPress; not before.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPostFaq = { question: string; answer: string };

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  keyword: string;
  date: string;
  image: string;
  imageAlt: string;
  readingMinutes: number;
  faqs?: BlogPostFaq[];
};

export type BlogPost = BlogPostMeta & { html: string };

function slugsFromDisk(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function readReadingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return slugsFromDisk()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        ...(data as Omit<BlogPostMeta, "slug" | "readingMinutes">),
        readingMinutes: readReadingMinutes(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    ...(data as Omit<BlogPostMeta, "slug" | "readingMinutes">),
    readingMinutes: readReadingMinutes(content),
    html: marked.parse(content, { async: false }) as string,
  };
}
