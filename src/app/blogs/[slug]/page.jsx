import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, FileDown, MessageCircle, User } from "lucide-react";
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/Footer";
import ShareButton from "./share-button";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "../../../lib/blog-data";

const SITE_URL = "https://www.navpathacademy.com";

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function buildJsonLd(post) {
  const canonical = `${SITE_URL}/blogs/${post.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.metaTitle,
      description: post.description,
      image: [post.img],
      author: {
        "@type": "Organization",
        name: post.author,
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "NavPath Academy",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/android-chrome-512x512.png`,
          width: 512,
          height: 512,
        },
      },
      datePublished: post.datePublished,
      dateModified: post.dateModified || post.datePublished,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      articleSection: "Maritime Education",
      keywords: post.keywords,
      inLanguage: "en-US",
    },
    ...(post.faqs.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]
      : []),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/blogs` },
        { "@type": "ListItem", position: 3, name: post.metaTitle, item: canonical },
      ],
    },
  ];
}

function ContentBlock({ block }) {
  switch (block.type) {
    case "h1":
      return (
        <h1 className="mb-4 mt-8 text-2xl font-bold text-[#241f3d] underline decoration-secondary/60 underline-offset-4 md:text-3xl">
          {block.text}
        </h1>
      );

    case "h2":
      return (
        <h2 className="mb-4 mt-10 text-xl font-bold text-[#241f3d] md:text-2xl">
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3 className="mb-3 mt-8 text-lg font-semibold text-[#241f3d] md:text-xl">
          {block.text}
        </h3>
      );

    case "p":
      return (
        <p className="mb-4 leading-relaxed text-gray-600">
          {block.text}
        </p>
      );

    case "ul":
    case "list":
      return (
        <ul className="mb-5 list-disc space-y-2 pl-6 text-gray-600 leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="mb-5 list-decimal space-y-2 pl-6 text-gray-600 leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );

    case "table":
      return (
        <div className="mb-8 overflow-x-auto rounded-xl border">
          <table className="min-w-full border-collapse">
            <thead className="bg-[#241f3d] text-white">
              <tr>
                {block.headers.map((header, i) => (
                  <th
                    key={i}
                    className="border px-4 py-3 text-left font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="even:bg-gray-50">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border px-4 py-3 text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "image":
      return (
        <figure className="my-8">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded-xl"
            loading="lazy"
          />

          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "note":
      return (
        <div className="my-6 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
          {block.title && (
            <h4 className="mb-2 font-semibold text-blue-900">
              {block.title}
            </h4>
          )}

          <p className="text-blue-800">
            {block.text}
          </p>
        </div>
      );

    case "warning":
      return (
        <div className="my-6 rounded-xl border-l-4 border-red-500 bg-red-50 p-5">
          {block.title && (
            <h4 className="mb-2 font-semibold text-red-900">
              {block.title}
            </h4>
          )}

          <p className="text-red-800">
            {block.text}
          </p>
        </div>
      );

    case "success":
      return (
        <div className="my-6 rounded-xl border-l-4 border-green-500 bg-green-50 p-5">
          {block.title && (
            <h4 className="mb-2 font-semibold text-green-900">
              {block.title}
            </h4>
          )}

          <p className="text-green-800">
            {block.text}
          </p>
        </div>
      );

    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-secondary pl-6 italic text-gray-700">
          <p>"{block.text}"</p>

          {block.author && (
            <footer className="mt-3 text-sm text-gray-500">
              — {block.author}
            </footer>
          )}
        </blockquote>
      );

    case "cards":
      return (
        <div
          className={`my-8 grid gap-6 ${
            block.columns === 3
              ? "md:grid-cols-3"
              : "md:grid-cols-2"
          }`}
        >
          {block.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <h4 className="mb-2 font-semibold text-[#241f3d]">
                {item.title}
              </h4>

              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      );

    case "cta":
      return (
        <div className="my-10 rounded-2xl bg-gradient-primary p-8 text-center text-white">
          <h3 className="mb-3 text-2xl font-bold">
            {block.title}
          </h3>

          <p className="mb-6 opacity-90">
            {block.description}
          </p>

          <a
            href={block.href}
            className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-[#241f3d] transition hover:opacity-90"
          >
            {block.button}
          </a>
        </div>
      );

    case "download":
      return (
        <div className="my-8">
          <a
            href={block.href}
            download
            className="inline-flex items-center rounded-lg bg-[#241f3d] px-5 py-3 font-medium text-white hover:bg-[#1b1730]"
          >
            {block.title}
          </a>
        </div>
      );

    case "divider":
      return (
        <hr className="my-10 border-gray-200" />
      );

    case "linkline":
      return (
        <p className="mb-4 leading-relaxed text-gray-600">
          {block.label}{" "}
          <a
            href={block.href}
            className="text-secondary underline hover:text-secondary/80"
          >
            {block.text}
          </a>
        </p>
      );

    default:
      return null;
  }
}

function RelatedCard({ post }) {
  return (
    <Link href={post.href} className="group block h-full">
      <div className="h-full overflow-hidden rounded-lg border border-[#e5e2f5] bg-card text-card-foreground shadow-sm transition-all duration-300 group-hover:shadow-lg">
        <div className="relative h-32 overflow-hidden sm:h-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.img}
            alt={post.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-3 md:p-4">
          <time className="mb-1.5 block text-xs text-muted-foreground md:mb-2">
            {post.date}
          </time>
          <h3 className="line-clamp-2 font-display text-sm font-semibold text-[#241f3d] transition-colors group-hover:text-secondary md:text-base">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blogs/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.ogTitle,
      description: post.ogDescription,
      siteName: "NavPath Academy",
      locale: "en_US",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: post.img, alt: post.alt, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.ogTitle,
      description: post.ogDescription,
      images: [post.img],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blocks =
    post.content.length > 0 ? post.content : [{ type: "p", text: post.excerpt }];
  const related = getRelatedPosts(post.slug, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {buildJsonLd(post).map((schema) => (
          <JsonLd key={schema["@type"]} data={schema} />
        ))}

        <section className="bg-gradient-primary pb-6 pt-20 text-primary-foreground md:pb-12 md:pt-36">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <Link
              href="/blogs"
              className="mb-4 inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground md:mb-6 md:text-base"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </Link>
            <h1 className="mb-4 font-display text-2xl font-bold leading-tight sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mb-4 text-base text-primary-foreground/80 md:mb-6 md:text-xl">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-primary-foreground/70 md:gap-4 md:text-sm">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <time dateTime={post.datePublished}>{post.date}</time>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <User className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Clock className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span>{post.readingTime}</span>
              </div>
              <ShareButton title={post.title} />
            </div>
          </div>
        </section>

        <section className="py-0">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <div className="relative z-10 -mt-4 md:-mt-8">
              <div className="relative h-48 w-full overflow-hidden rounded-xl shadow-lg sm:h-64 md:h-96 md:rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.img}
                  alt={post.alt}
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  className="h-48 w-full object-cover sm:h-64 md:h-96"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <article className="space-y-0">
              {blocks.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}
            </article>
          </div>
        </section>

        {post.faqs.length > 0 && (
          <section className="pb-8 md:pb-16">
            <div className="mx-auto max-w-4xl px-4 md:px-6">
              <h2 className="mb-6 font-display text-2xl font-bold text-[#241f3d] md:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-[#e5e2f5] bg-card text-card-foreground shadow-sm"
                  >
                    <div className="p-5">
                      <h3 className="mb-2 font-semibold text-[#241f3d]">{faq.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="bg-muted/30 py-8 md:py-16">
            <div className="mx-auto px-4 md:px-6">
              <h2 className="mb-6 text-center font-display text-xl font-bold text-[#241f3d] md:mb-8 md:text-3xl">
                Related <span className="text-secondary">Articles</span>
              </h2>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
                {related.map((item) => (
                  <RelatedCard key={item.slug} post={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />

      <a
        href="/NavPath-Brochure-English.pdf"
        download
        aria-label="Download NavPath Academy brochure"
        className="fixed bottom-20 right-4 z-50 flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#241f3d] text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 sm:w-auto sm:px-4 md:bottom-24 md:right-6 md:h-14 md:px-5"
      >
        <FileDown className="h-5 w-5 md:h-6 md:w-6" />
        <span className="sr-only text-sm font-semibold sm:not-sr-only sm:inline md:text-base">
          Download brochure
        </span>
      </a>

      <a
        href="https://wa.me/917736522210?text=Hi!%20I'd%20like%20to%20know%20more%20about%20IMU%20CET%20coaching%20at%20NavPath%20Academy.%20Can%20you%20help%20me%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-4 right-4 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 md:bottom-6 md:right-6 md:flex md:h-14 md:w-14"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
