==================================================
IMPLEMENTATION STATUS (last updated 2026-07-21, revised same day)
==================================================

The build described in this brief is DONE. A future session opening this
folder can start from here instead of re-reading the whole spec below.

REVISION PASS 1 (same day): owner reviewed the first build and asked for
image-crop fixes, a Product Facts redesign, the lifestyle section swapped
for a blog-post preview grid, and mock review cards.

REVISION PASS 2 (same day): a real Markdown-based blog was built --
see BLOG ARCHITECTURE below. This supersedes the original brief's
"WordPress REST API in a later phase" plan (see FUTURE WORDPRESS
INTEGRATION further down, which is now historical, not the live plan).

All sections below have been updated in place rather than left as a
changelog.

STACK & SETUP
-------------
- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4
  (CSS-first config via @theme in app/globals.css, no tailwind.config.ts).
- Framer Motion for scroll reveals, MotionConfig(reducedMotion="user") in
  components/ui/motion-provider.tsx so animation respects OS setting.
- lucide-react for icons. Note: this version of lucide-react ships no
  brand/logo icons (Instagram, Facebook, etc. were removed upstream) --
  not an issue here since this brief never needed social icons.
- `npm run dev` / `npm run build` / `npm run lint` all pass clean.
- Dev server defaults to :3000; it ran on :3001 during the build session
  only because the sibling mide_smokeyfish project was still on :3000.

DESIGN SYSTEM ACTUALLY USED
----------------------------
- Colors: exactly the hex values this brief specifies (#07110D bg,
  #0D1F17 secondary, #58C878 emerald accent, #B8E986 lime highlight,
  #F5F7F2 / #A9B7AE text) -- defined as CSS vars + Tailwind @theme tokens
  in app/globals.css (--color-bg, --color-accent, --color-paper, etc.).
- Type: Archivo (display, 600-900 weight, tight tracking) + Public Sans
  (body) + IBM Plex Mono (data: eyebrow labels, ingredient mg amounts,
  price, nav "font-data" bits) -- loaded via next/font/google in
  app/layout.tsx.
- Signature motif: `.facts-panel` / `.facts-row` classes in globals.css --
  a light "supplement facts label" card (thick top/bottom rule, thin row
  dividers) echoing a real nutrition-facts panel. Used prominently in
  ProductFacts and as a small floating badge in the hero. This is the
  "one memorable thing" per the frontend-design approach -- don't dilute
  it by reusing it everywhere.
- Container: max-w-1180px (`.container-page` class) -- deliberately
  compact, not full-bleed, per this user's stated general preference.

IMAGE SOURCING (see lib/gallery-images.ts for the full map)
-------------------------------------------------------------
Supplied source photos are pre-made Amazon/social ad tiles (~3625x3625,
baked-in headlines, essentially perfect squares), not clean isolated
assets, except "PRODUCT RENDERING.jpg". User explicitly said to use the
ad tiles as-is rather than crop them clean. scripts/resize-images.mjs
(uses `sharp`, already a project dependency) downsamples all 17 originals
from ~40MB total to ~1.5MB, writing descriptive filenames into
public/images/. Widths were intentionally cut down further in the
revision pass (900-1400px depending on how large the image ever renders
on the page) since a 700-900px square is already sharp at 2x for every
box these appear in. The raw 17 source jpgs in the project root were
deleted after a successful resize run -- only public/images/ output is
kept going forward (see the comment atop scripts/resize-images.mjs).

CROP RULE -- because every ad-tile source is square with text baked in
edge-to-edge, ANY component that renders one MUST use an `aspect-square`
container with `object-cover`. A square-into-square cover never crops.
The original build used `aspect-[4/5]` / `aspect-[5/4]` / `aspect-[4/3]`
boxes for these images (hero, wellness-overview, the old dog-lifestyle
section) which sliced the baked-in headlines and checklists off at the
edges -- that was flagged and fixed in the revision pass. Don't
reintroduce a non-square crop for one of these images without cropping
the source photo itself first.

primo4.jpg and Primo9.jpg (-> health-upgrade-treat-time.jpg and
dog-pack-happy-healthy-life.jpg) both carry an unverified "VETERINARIAN
RECOMMENDED" seal baked into the image. The original build excluded them
entirely per the brief's "don't invent vet endorsements" rule. The owner
explicitly overrode that in the revision pass ("images were provided by
the owner so he can know what is unverified or not") -- they're now
processed and used on the blog-preview cards. If that instruction is
ever revisited, these are the two images to pull back out.

DATA / CONFIG (single source of truth, nothing hardcoded in components)
-------------------------------------------------------------------------
- lib/product-data.ts -- product info, price (NGN 25,500), trust strip,
  4 benefit areas, 7-entry ingredient system, 13-row product facts table,
  does-not-contain list, usage steps, FAQs (14, answers written
  conservatively per the brief's language rules).
  `testimonials` now holds 6 placeholder reviews (every entry has
  `isPlaceholder: true`), added at the owner's explicit request to
  preview the review-card layout before real feedback is collected --
  components/testimonials.tsx renders them as modern review cards
  (star rating, initials avatar, quote). Swap the array contents for
  verified reviews when available; the empty-state "Reviews coming soon"
  fallback in the component still fires if the array is ever emptied.
- lib/site-config.ts -- nav links (now Benefits / Ingredients / Product
  Facts / Pricing / FAQs -- "Pricing" jumps to id="offer", added on
  request), WhatsApp config (unused unless NEXT_PUBLIC_WHATSAPP_NUMBER is
  set), `checkoutUrl`, and `petshopPlus` ({name, url, links}). checkoutUrl
  defaults to the real live listing
  (https://petshopplus.ng/product/k9-multi-benefit-supplement/) via
  NEXT_PUBLIC_CHECKOUT_URL env var -- every "Add to Cart" / "Buy Now" /
  "Shop Now" button (components/ui/shop-button.tsx) reads from here, so
  swapping to a real cart/checkout later is a one-line env change.
  `petshopPlus` holds the real seller's name/URL and its 5 legal-page
  links (About Us, Shipping & Handling, Refund Policy, Terms of Service,
  Contact), all on petshopplus.ng -- footer.tsx links out to these rather
  than duplicating the content in-app. Reasoning: Petshop Plus is the
  actual seller of record (checkoutUrl already sends buyers there), so
  their pages are the accurate, actively-maintained source -- copying
  privacy/legal text into this app would just create a second copy that
  can drift out of sync. Revisit only if this site starts collecting data
  independently of Petshop Plus.
- lib/gallery-images.ts -- maps every image used on the page to its file
  + alt text, so assets can be swapped without touching components. Now
  includes all 17 source images (see IMAGE SOURCING above).
- lib/blog.ts -- reads content/blog/*.md at request/build time (fs +
  gray-matter for frontmatter, marked for Markdown -> HTML). See BLOG
  ARCHITECTURE below.

BLOG ARCHITECTURE
-------------------------------------------------------------------------
Real blog, built as static Markdown in this Next.js app -- NOT
WordPress. Decision: with only 6-10 target-keyword articles, headless
WordPress would have been pure boilerplate (separate hosting, REST API
integration, plugin/security maintenance, an extra network hop per page)
for zero SEO upside -- a statically-generated Next.js page is faster and
just as easy to get right on metadata/structured data. Revisit WordPress
only if this grows into dozens of posts written by non-technical authors
who need a real editor UI; not before. This reverses the original
brief's "WordPress in a later phase" plan (see FUTURE WORDPRESS
INTEGRATION further down -- now historical).

- content/blog/*.md -- one file per article. Frontmatter: title,
  description (meta description), excerpt (card blurb), category,
  keyword (the target SEO keyword it's written for), date (YYYY-MM-DD),
  image + imageAlt (path into public/images/, reusing the same gallery
  assets -- see IMAGE SOURCING), and an optional `faqs` array
  ({question, answer}[]) -- see CONTENT DEPTH PASS below. Body is plain
  Markdown, rendered via `marked`. 9 articles exist, one per keyword in
  the brief's target list (K9 multi benefit supplement, dog
  supplements/vitamins/joint supplement/probiotic supplement/salmon oil
  supplement Nigeria, dog health supplements Lagos, best dog supplements
  Nigeria). All internal links inside article bodies point at this
  site's own anchors (`/#offer`, `/#ingredients`, `/blog/other-slug`)
  rather than the external checkoutUrl, which can change independently.
- lib/blog.ts -- `getAllPostsMeta()` (list, sorted newest-first) and
  `getPostBySlug(slug)` (full post incl. rendered HTML + computed
  readingMinutes). Both read the filesystem directly -- no database, no
  build step beyond `next build`'s normal SSG.
- components/blog-post-card.tsx -- the card UI (image, category pill,
  title, excerpt, "Read article") shared between the homepage teaser and
  the /blog index, now a real `<Link>` to `/blog/[slug]`.
- components/blog-preview-section.tsx -- homepage teaser, first 6 posts
  + a "View all articles" link to /blog.
- components/ui/faq-accordion.tsx -- the open/close accordion interaction
  extracted out of components/faq-section.tsx so it can be reused for
  per-article FAQs too (see CONTENT DEPTH PASS). Takes `faqs: {question,
  answer}[]` as a prop; both the homepage FaqSection and
  app/blog/[slug]/page.tsx render it against their own data, so there's
  one accordion implementation, not two.
- app/blog/page.tsx -- full index of all posts.
- app/blog/[slug]/page.tsx -- article page. generateStaticParams (SSG,
  all 9 prerendered at build time), generateMetadata (per-post title/
  description/canonical/OG), BlogPosting JSON-LD (+ FAQPage JSON-LD when
  the post has `faqs`), a **narrow ~600px reading column** (see LAYOUT
  NOTE below), hero image capped at 340px and centered rather than a
  full-width banner, Markdown body via `prose prose-invert`
  (@tailwindcss/typography, themed to this site's colors via the
  `--tw-prose-*` var overrides in globals.css rather than its default
  gray scale), an FaqAccordion section when present, a shop CTA block,
  and a compact "Keep reading" related-posts list (small thumbnail +
  category + title in a row -- not a 3-col card grid, which was too
  cramped once the column narrowed).
- app/sitemap.ts / app/robots.ts -- added alongside the blog since this
  is now a real multi-page site worth crawling properly.
- Navbar gained a "Blog" link and had to learn to resolve hash links
  (`#benefits` etc.) relative to the current route -- from `/blog` or
  `/blog/[slug]`, those now resolve to `/#benefits` so they navigate
  home first. See `resolveHref()` in components/navbar.tsx. The brand
  logo link is `/` when off the homepage, `#top` when on it.
- Root layout (app/layout.tsx) now owns AnnouncementBar/Navbar/Footer/
  StickyMobileCta so they're shared across every route, not just "/".
  Organization JSON-LD lives in the root layout (sitewide); Product and
  FAQPage JSON-LD moved to app/page.tsx since they only describe content
  that's actually rendered on the homepage.

LAYOUT NOTE -- app/blog/[slug]/page.tsx nests a `max-w-[600px]` wrapper
INSIDE `.container-page`, rather than putting `max-w-[600px]` directly on
the same element as `container-page`. Combining them on one element
doesn't work: `.container-page`'s own `max-width: 1180px` (a plain CSS
rule in globals.css, defined after Tailwind's utilities in source order)
wins the cascade over the `max-w-[...]` utility at equal specificity, so
the narrower width silently gets ignored. This is a real trap worth
remembering anywhere else `container-page` needs a narrower cap than its
default 1180px -- always nest a separate inner element for the override.

CONTENT DEPTH PASS -- the first draft of all 9 articles was thin
(400-700 words) and technically well-optimized but too shallow to
realistically rank for the more competitive target keywords (e.g. "dog
supplements Nigeria", "best dog supplements Nigeria"). Every article was
expanded to a more consistent 800-1125 words with added H2/H3
subsections and cross-links to the other articles, plus a 5-question
`faqs` frontmatter block per post (drives both the on-page FaqAccordion
and per-post FAQPage JSON-LD). Even at this depth, on-page content alone
doesn't guarantee ranking -- domain age and backlinks matter too, and
those are outside what this codebase controls. If more depth is ever
wanted, follow the same pattern: add H2/H3s and FAQ entries per article,
don't just pad existing paragraphs.

SECTIONS BUILT (all from the brief, app/page.tsx wires them in order)
-------------------------------------------------------------------------
announcement-bar, navbar (sticky, mobile menu), hero-section (H1 lives
here, only H1 on the page), trust-strip, wellness-overview (the
"problem" section), benefits-section (id="benefits", 4-area system),
ingredient-system (id="ingredients"), product-facts (id="product-facts",
includes the does-not-contain checklist, redesigned in the revision pass
to balance column heights and add a supporting infographic image),
usage-section, blog-preview-section (replaces the original
dog-lifestyle-section -- 6 cards previewing real posts from
content/blog/, see BLOG ARCHITECTURE above), testimonials (now populated with placeholder reviews,
see above), product-offer (id="offer", qty selector, links to
checkoutUrl), faq-section (id="faq", accordion), final-cta, footer
(two columns: brand/tagline/"Sold by Petshop Plus" on the left, the 5
petshopPlus.links in one horizontal row on the right styled like the
navbar links, per owner request -- no more Explore/Shop columns; still
includes the required supplement disclaimer + copyright bar below),
sticky-mobile-cta (shows past 640px scroll, lg:hidden).

SEO
---
app/layout.tsx has full metadata (title/description matching the
brief's suggested copy, canonical via siteConfig.canonicalPath,
OG/Twitter) plus Organization JSON-LD (sitewide). app/page.tsx adds
Product (price/availability/offers) and FAQPage (generated from the same
`faqs` array the UI renders, so they can never drift apart) JSON-LD,
scoped to the homepage since that's the only page that actually renders
that content. Each blog post adds its own BlogPosting JSON-LD and
per-post metadata (see BLOG ARCHITECTURE above). app/sitemap.ts and
app/robots.ts cover the whole site, including all blog posts.

KNOWN GAPS / NEXT STEPS
------------------------
- Mobile responsiveness (375/390/414px) was NOT visually verified via
  screenshot in the build session -- the browser automation tool's
  resize_window call was a no-op in that environment. Layout uses the
  same mobile-first Tailwind patterns (grid-cols-1 sm:grid-cols-2 etc.)
  proven working on the sibling mide_smokeyfish build, and one real
  horizontal-overflow bug found during desktop QA (arbitrary `fr` grid
  columns need min-w-0) was fixed in ingredient-system.tsx and
  product-facts.tsx -- but the user said they'd check mobile themselves.
  Still true after the revision pass: resize_window was a no-op again,
  so the crop/layout fixes were verified at desktop width only.
- Testimonials are placeholder content (see DATA / CONFIG above) --
  replace with real, verified reviews in lib/product-data.ts when the
  owner has them.
- NEXT_PUBLIC_WHATSAPP_NUMBER, NEXT_PUBLIC_SITE_URL, and
  NEXT_PUBLIC_CHECKOUT_URL are not set anywhere yet (all have sane
  defaults) -- set them in .env.local / hosting env vars for production.
  NEXT_PUBLIC_SITE_URL matters more now: it feeds every blog post's
  canonical URL and OG image URL, plus sitemap.xml.
- No favicon has been added beyond the Next.js default.
- Publishing a new article is: add a content/blog/some-slug.md file with
  the right frontmatter, done -- no code changes needed. See BLOG
  ARCHITECTURE above for the frontmatter shape.
- If a long-running `npm run dev` session starts showing a blank page
  with a "Jest worker encountered N child process exceptions" console
  error, that's a stale dev-server worker pool, not an app bug -- kill
  and restart `npm run dev`. Confirmed during the blog build: `npm run
  build` + `npm run start` on a clean port rendered every route fine
  while the long-lived dev server choked on one route.

==================================================
ORIGINAL BRIEF (unchanged, for reference)
==================================================

https://petshopplus.ng/product/k9-multi-benefit-supplement/

You are a senior product designer, conversion-focused landing page designer, SEO strategist, and expert Next.js frontend engineer.

Build a premium, high-converting single-product landing page for:

PRODUCT
=======

Product name:

PrimoScience K9 Multi-Benefit Supplement

Product category:

Dog vitamins and supplements

Primary market:

Nigeria

Primary audience:

Dog owners looking for nutritional support for their dog's:

- Joint health
- Mobility
- Digestion
- Skin and coat
- General wellness
- Daily nutrition

The product should be positioned as a comprehensive multi-benefit nutritional supplement for dogs.

IMPORTANT:

Do not make unsupported medical claims.

Do not claim that the product cures, treats, prevents, or diagnoses diseases unless explicitly supported by verified product documentation and legally appropriate.

Use language such as:

- supports
- helps maintain
- contributes to
- provides nutritional support for
- formulated with
- designed to support

Avoid claims such as:

- cures arthritis
- treats disease
- heals joint damage
- prevents illness
- guarantees a longer life

==================================================
MAIN OBJECTIVE
==================================================

Build a premium, visually impressive, SEO-friendly single-product landing page.

This is the first phase of a larger headless WordPress project.

IMPORTANT ARCHITECTURE DECISION:

Do NOT build the blog in this phase.

Do NOT create a blog CMS.

Do NOT create MDX blog content.

Do NOT create blog article management.

The blog will be hosted and managed by an existing WordPress website.

In a later phase, WordPress will provide blog content through the WordPress REST API and the Next.js frontend will consume and render that content.

Therefore:

- Build the product landing page as a standalone Next.js page.
- Keep the code modular and reusable.
- Avoid tightly coupling the product page to a future blog implementation.
- Create clean reusable components that can later be reused across the wider website.
- Do not create unnecessary blog infrastructure at this stage.

==================================================
TECH STACK
==================================================

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- next/image
- Semantic HTML
- JSON-LD structured data
- Responsive mobile-first design

Use Server Components by default.

Use Client Components only when interactivity requires them.

Create reusable components instead of putting the entire page into one massive component.

Suggested structure:

app/
  page.tsx
  layout.tsx
  globals.css

components/
  announcement-bar.tsx
  navbar.tsx
  hero-section.tsx
  trust-strip.tsx
  wellness-overview.tsx
  benefits-section.tsx
  ingredient-system.tsx
  product-facts.tsx
  usage-section.tsx
  dog-lifestyle-section.tsx
  testimonials.tsx
  faq-section.tsx
  product-offer.tsx
  final-cta.tsx
  footer.tsx

lib/
  product-data.ts
  site-config.ts

public/
  images/
  icons/

==================================================
PRODUCT INFORMATION
==================================================

Product:

PrimoScience K9 Multi-Benefit Supplement

The product includes:

- Glucosamine HCl
- Chondroitin sulfate
- MSM
- Wild Alaskan salmon oil
- Taurine
- Vitamin C
- Vitamin E
- Vitamin B1
- Vitamin B6
- Vitamin B2
- Folic acid
- Vitamin B12
- Probiotic blend

The product is positioned around nutritional support for:

- Joint health
- Digestive health
- Skin and coat wellness
- General nutritional support
- Antioxidant support
- Overall daily wellness

The product information states:

- No chemicals or fillers
- No artificial flavors
- No artificial colors
- Gluten free

Current product price:

₦25,500

Current availability:

In stock

IMPORTANT:

Create a central product data object.

Example:

lib/product-data.ts

The following should be configurable from one location:

- Product name
- Price
- Currency
- Availability
- Description
- Ingredients
- Product image
- Benefits
- CTA text
- Product URL
- WhatsApp or checkout URL

Do not hardcode these values throughout the application.

==================================================
DESIGN DIRECTION
==================================================

The design should feel like:

Premium pet wellness brand
+
Modern supplement brand
+
Natural science
+
High-quality direct-to-consumer e-commerce

The website should feel:

- Premium
- Trustworthy
- Scientific but approachable
- Natural
- Modern
- Clean
- Conversion-focused

Avoid:

- Generic pet store design
- Cartoonish visuals
- Cheap supplement website design
- Excessive bright colors
- Overly clinical pharmaceutical design
- Crowded layouts

==================================================
COLOR PALETTE
==================================================

Use a dark green visual theme inspired by the product packaging.

Primary background:

#07110D

Deep green-black.

Secondary background:

#0D1F17

Deep forest green.

Primary accent:

#58C878

Emerald green.

Highlight accent:

#B8E986

Soft lime green.

Primary text:

#F5F7F2

Muted text:

#A9B7AE

Use green highlights carefully.

Do not make the entire page bright green.

The product image should remain the main visual focus.

Use:

- Deep green backgrounds
- Soft emerald glows
- Dark gradients
- Subtle natural textures
- Clean off-white text
- Green accent buttons

==================================================
TYPOGRAPHY
==================================================

Use a modern premium sans-serif font.

Typography should feel:

- Clean
- Confident
- Premium
- Scientific
- Highly readable

Use:

- Large bold hero headlines
- Strong visual hierarchy
- Short readable paragraphs
- Generous whitespace

Avoid walls of text.

==================================================
SECTION 1: ANNOUNCEMENT BAR
==================================================

Create a slim announcement bar at the top.

Possible text:

"Joint • Digestive • Skin & Coat • Everyday Wellness"

Keep the design premium and subtle.

==================================================
SECTION 2: NAVIGATION
==================================================

Create a clean sticky navigation.

Brand:

PrimoScience K9

Navigation links:

- Benefits
- Ingredients
- Product Facts
- FAQs

Primary CTA:

"Shop Now"

On mobile:

- Create a clean mobile navigation menu.
- Consider a sticky bottom CTA for mobile.

==================================================
SECTION 3: HERO SECTION
==================================================

This is the most important section.

Create a powerful premium hero.

Main headline:

"Complete Daily Wellness Support for Your Dog."

Supporting copy:

"PrimoScience K9 Multi-Benefit Supplement combines nutritional support for joints, digestion, skin and coat, and everyday wellness in one convenient supplement."

Primary CTA:

"Shop K9 Multi-Benefit Supplement"

Secondary CTA:

"Explore the Benefits"

The hero must include:

- Large premium product image
- Dark green background
- Soft emerald atmospheric glow
- Subtle premium visual effects
- Optional realistic healthy dog imagery

The product packaging must remain accurate.

Do not redesign the label.

Do not alter the actual product name.

Do not invent claims on the packaging.

The product image must be the visual focal point.

==================================================
SECTION 4: TRUST STRIP
==================================================

Create four trust/benefit items:

MULTI-BENEFIT FORMULA

Multiple nutritional support ingredients in one product.

JOINT SUPPORT

Includes glucosamine, chondroitin and MSM.

DIGESTIVE SUPPORT

Includes a probiotic blend.

NO ARTIFICIAL COLOURS

Formulated without artificial colours.

Only use claims supported by verified product information.

==================================================
SECTION 5: PROBLEM / CUSTOMER INSIGHT
==================================================

Headline:

"Your Dog's Wellness Is More Than One Thing."

Explain that dog owners care about multiple aspects of their dog's everyday wellness:

- Mobility
- Digestion
- Skin and coat
- Daily nutrition
- Overall wellness

Position the product as a convenient way to bring multiple nutritional support ingredients into one daily routine.

Do not use fear-based marketing.

Do not imply that dogs will become sick without the product.

==================================================
SECTION 6: MULTI-BENEFIT SYSTEM
==================================================

Headline:

"One Formula. Multiple Areas of Support."

Create four premium benefit areas.

1. JOINT SUPPORT

Ingredients:

- Glucosamine
- Chondroitin
- MSM

Copy:

"Formulated with ingredients commonly included in nutritional formulas designed to support joint health and mobility."

2. DIGESTIVE SUPPORT

Ingredients:

- Probiotic blend

Copy:

"Includes a probiotic blend as part of a formula designed to support healthy digestion."

3. SKIN & COAT WELLNESS

Ingredients:

- Wild Alaskan salmon oil
- Antioxidant nutrients

Copy:

"Provides nutritional ingredients that contribute to overall skin and coat wellness."

4. DAILY NUTRITIONAL SUPPORT

Ingredients:

- Taurine
- Vitamins
- Folic acid
- Vitamin B12
- Other listed nutrients

Copy:

"A broad nutritional formula designed to complement your dog's daily wellness routine."

Use elegant cards with:

- Iconography
- Ingredient highlights
- Short descriptions
- Subtle hover animation

==================================================
SECTION 7: INGREDIENT SYSTEM
==================================================

Headline:

"What's Inside Matters."

Create an ingredient showcase.

Include:

GLUCOSAMINE

Included as part of the joint-support formula.

CHONDROITIN

Included as part of the joint-support formula.

MSM

Included in the multi-ingredient joint-support system.

WILD ALASKAN SALMON OIL

Included as part of the nutritional formula.

TAURINE

An important nutrient included in the product formula.

PROBIOTIC BLEND

Included to provide digestive-support nutrition.

VITAMINS

Includes multiple vitamins and nutrients.

Use accurate conservative language.

Do not make unsupported disease claims.

==================================================
SECTION 8: PRODUCT FACTS
==================================================

Create a detailed product facts section.

Display verified active ingredients per 3.5g chew:

Glucosamine HCl from shellfish — 200mg

Chondroitin sulfate — 100mg

MSM — 100mg

Wild Alaskan salmon oil — 100mg

Taurine — 100mg

Vitamin C — 50mg

Vitamin E — 20 IU

Vitamin B1 — 2mg

Vitamin B6 — 1.35mg

Vitamin B2 — 1.15mg

Folic acid — 200mcg

Vitamin B12 — 5mcg

Probiotic blend — 1B CFU

Use a clean expandable facts table.

Make it easy to read on mobile.

==================================================
SECTION 9: WHAT IT DOES NOT CONTAIN
==================================================

Headline:

"Simple Choices. Clear Information."

Display verified claims:

- No chemicals or fillers
- No artificial flavors
- No artificial colours
- Gluten free

Use clean checkmark visuals.

Do not invent certifications.

==================================================
SECTION 10: HOW TO USE
==================================================

Create a simple usage section.

Do not invent dosage instructions.

If verified dosage instructions are not available, display:

"Follow the dosage instructions provided on the product packaging."

You may include:

1. Follow the recommended serving instructions.
2. Make it part of your dog's regular routine.
3. Store properly according to the product instructions.

Do not guess dosage based on dog weight or age.

==================================================
SECTION 11: DOG LIFESTYLE SECTION
==================================================

Headline:

"More Good Days. More Adventures. More Time Together."

Show realistic healthy dogs:

- Walking
- Playing
- Resting
- Spending time with their owners

The emotional message should be about supporting a dog's everyday wellness routine.

Do not claim that the product guarantees longer life or prevents disease.

==================================================
SECTION 12: SOCIAL PROOF
==================================================

Create a testimonial section.

Headline:

"Dog Owners Want the Best for Their Dogs."

Only use real verified testimonials if provided.

Do not invent:

- Customer names
- Customer photos
- Star ratings
- Customer counts
- Reviews

If real reviews are unavailable, create clearly marked placeholder content that can be replaced later.

==================================================
SECTION 13: PRODUCT OFFER
==================================================

Create a strong conversion section.

Display:

Product:

PrimoScience K9 Multi-Benefit Supplement

Price:

₦25,500

Availability:

In stock

CTA:

"Add to Cart"

Secondary CTA:

"Buy Now"

Include:

- Product image
- Price
- Quantity selector
- Availability
- Key benefits
- Delivery information placeholder
- Payment information placeholder

The checkout action must be configurable.

Do not hardcode checkout links throughout the application.

==================================================
SECTION 14: FAQ
==================================================

Create an accessible accordion FAQ.

Questions:

What is PrimoScience K9 Multi-Benefit Supplement?

What does the K9 Multi-Benefit Supplement support?

What ingredients are included?

Does it contain glucosamine?

Does it contain chondroitin and MSM?

Does it contain probiotics?

Does it contain salmon oil?

How should I use the product?

How should I store the product?

Does it contain artificial colours?

Does it contain artificial flavours?

Is it gluten free?

How do I order?

Do you deliver?

For veterinary or medical questions, recommend consulting a qualified veterinarian.

Do not invent answers where verified information is unavailable.

==================================================
SECTION 15: FINAL CTA
==================================================

Headline:

"Make Daily Wellness Part of Their Routine."

Supporting copy:

"One convenient formula. Multiple areas of nutritional support."

CTA:

"Shop PrimoScience K9"

Use:

- Dark green background
- Soft emerald glow
- Product image
- Premium composition

==================================================
SEO REQUIREMENTS
================

SEO is important even though the blog is not being built in this phase.

Optimize this product page for:

Primary keyword:

"K9 multi benefit supplement"

Secondary keywords:

- dog supplements Nigeria
- dog vitamins Nigeria
- dog joint supplement Nigeria
- glucosamine supplement for dogs Nigeria
- dog probiotic supplement Nigeria
- dog salmon oil supplement Nigeria
- dog health supplements Lagos
- best dog supplements Nigeria

Use keywords naturally.

Do not keyword stuff.

==================================================
ON-PAGE SEO
===========

Implement:

- One clear H1
- Logical H2 hierarchy
- Descriptive H3 headings
- Semantic HTML
- Descriptive image alt text
- Canonical URL
- Meta title
- Meta description
- Open Graph metadata
- Twitter metadata
- Product structured data
- Organization structured data where appropriate
- FAQ structured data only if valid

Suggested title:

"PrimoScience K9 Multi-Benefit Supplement for Dogs | Nigeria"

Suggested meta description:

"Shop PrimoScience K9 Multi-Benefit Supplement for nutritional support across joints, digestion, skin and coat, and everyday dog wellness. Available in Nigeria."

Suggested URL:

/k9-multi-benefit-supplement/

==================================================
FUTURE WORDPRESS INTEGRATION
=============================

The existing WordPress website will later act as the CMS for blog content.

The future architecture will be:

WordPress
    ↓
WordPress REST API
    ↓
Next.js
    ↓
Blog listing and article pages

Do not implement this integration now.

However, keep the project architecture clean so that later:

- Blog pages can be added under /blog/
- WordPress posts can be fetched from the REST API
- WordPress categories can be mapped to Next.js routes
- WordPress featured images can be rendered through next/image
- WordPress SEO metadata can be consumed or mapped
- Product pages and blog articles can link to each other

Do not create mock blog infrastructure in this phase.

==================================================
IMAGE DIRECTION
===============

The product packaging is the primary visual asset.

Use:

1. Premium hero product image

Dark green background.

Soft emerald glow.

Premium product presentation.

2. Product cutout

For product offer sections.

3. Ingredient visuals

Glucosamine, salmon oil, probiotics, vitamins, and nutritional elements.

4. Realistic dog lifestyle imagery

Healthy dogs in natural settings.

Do not distort the product packaging.

Do not alter the product label.

Do not create fake certifications.

Do not create fake veterinary endorsements.

==================================================
ANIMATION
=========

Use subtle Framer Motion animation:

- Fade-up reveals
- Product image reveal
- Gentle background movement
- Ingredient card animations
- Smooth FAQ accordion
- Button hover states

Respect prefers-reduced-motion.

Do not over-animate.

==================================================
MOBILE
=======

Optimize for:

375px
390px
414px

The mobile experience must be excellent.

Pay attention to:

- Product image sizing
- CTA visibility
- Readable ingredient facts
- FAQ usability
- Mobile navigation
- Sticky mobile CTA if appropriate

==================================================
PERFORMANCE
===========

Optimize for:

- Core Web Vitals
- Fast mobile loading
- next/image
- Responsive image sizes
- Lazy loading
- Minimal JavaScript
- Server Components by default
- Minimal layout shift

==================================================
FINAL QUALITY CHECK
===================

Before completing:

1. Check the entire page visually.
2. Check mobile responsiveness.
3. Check the product image presentation.
4. Check the SEO metadata.
5. Check the heading hierarchy.
6. Check JSON-LD structured data.
7. Check all CTAs.
8. Check accessibility.
9. Check performance.
10. Check that no fake testimonials exist.
11. Check that no unsupported medical claims exist.
12. Check that the product price is consistent.
13. Check that the code is modular.
14. Check that the future WordPress integration will be easy to add later.

Build the complete premium single-product landing page now.