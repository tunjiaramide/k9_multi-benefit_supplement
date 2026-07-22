import type { Metadata } from "next";
import { Archivo, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { product } from "@/lib/product-data";
import { MotionProvider } from "@/components/ui/motion-provider";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "PrimoScience K9 Multi-Benefit Supplement for Dogs | Nigeria";
const description =
  "Shop PrimoScience K9 Multi-Benefit Supplement for nutritional support across joints, digestion, skin and coat, and everyday dog wellness. Available in Nigeria.";
const canonicalUrl = `${siteConfig.url}${siteConfig.canonicalPath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "K9 multi benefit supplement",
    "dog supplements Nigeria",
    "dog vitamins Nigeria",
    "dog joint supplement Nigeria",
    "glucosamine supplement for dogs Nigeria",
    "dog probiotic supplement Nigeria",
    "dog salmon oil supplement Nigeria",
    "dog health supplements Lagos",
    "best dog supplements Nigeria",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: siteConfig.name,
    images: [{ url: product.image, width: 2200, height: 2200 }],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [product.image],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: product.brand,
    url: siteConfig.url,
    description,
  };

  return (
    <html
      lang="en"
      className={`${archivo.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg font-body text-ink">
        <MotionProvider>
          <div className="flex min-h-full flex-col">
            <AnnouncementBar />
            <Navbar />
            <main className="flex-1 pb-24 lg:pb-0">{children}</main>
            <Footer />
            <StickyMobileCta />
          </div>
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
