import type { Metadata } from "next"
import type { BlogPost } from "./blog"
import type { Faq } from "../types/faq"

const SITE_URL = "https://webandadssolution.com"
const SITE_NAME = "Web and Ads Solutions"
const BLOG_NAME = "Web and Ads Solutions Blog"

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function truncate(text: string, maxLength = 155): string {
  if (!text) return ""
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trimEnd()}…` : text
}

const SITE_NAME_IN_TITLE_RE = /\s*[|\-:–—]?\s*Web and Ads Solutions?\s*(Blog)?\s*$/i

function stripSiteNameFromTitle(title: string): string {
  return title.replace(SITE_NAME_IN_TITLE_RE, "").trim()
}

export function buildBlogMetadata(post: BlogPost): Metadata {
  const title = stripSiteNameFromTitle(post.metaTitle || post.title) || post.title
  const description = post.metaDescription || truncate(post.excerpt || stripHtml(post.content) || `Read ${post.title} on ${BLOG_NAME}.`)
  const canonical = post.canonicalUrl || `${SITE_URL}/${post.categorySlug}/${post.slug}`
  const ogTitle = title
  const ogDescription = description
  const ogUrl = canonical
  const ogImage = post.image || undefined
  const twitterTitle = title
  const twitterDescription = description
  const twitterImage = ogImage

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    keywords: [post.category, ...post.tags, "SEO", "digital marketing", "PPC"],
    openGraph: {
      type: "article",
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      siteName: SITE_NAME,
      images: ogImage ? [{ url: ogImage, alt: title }] : undefined,
      publishedTime: post.dateIso || undefined,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      images: twitterImage ? [twitterImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function buildBlogArticleJsonLd(post: BlogPost): Record<string, unknown> {
  if (post.schema && Object.keys(post.schema).length > 0) {
    return post.schema
  }

  const canonical = `${SITE_URL}/${post.categorySlug}/${post.slug}`

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || stripHtml(post.content),
    image: post.image ? [post.image] : undefined,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: "https://webandadssolution.com/wp-content/uploads/2025/04/new-logo.png",
    },
    datePublished: post.dateIso || undefined,
    dateModified: post.dateIso || undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    articleSection: post.category,
    keywords: [...post.tags, post.category],
  }
}

export function faqJsonLd(faqs: Faq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  }
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
