import type { Metadata } from "next"
import { notFound } from "next/navigation"
import AuthorProfilePage from "../../../views/author-profile-page"
import { getAuthorBySlug, getAuthors, getAuthorPosts } from "../../../lib/blog"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) return {}

  const title = author.metaTitle || `${author.name} | Web and Ads Solutions`
  const description = author.metaDescription || author.description || `Read articles written by ${author.name}.`

  return {
    title: { absolute: title },
    description,
    keywords: author.metaKeywords || undefined,
    alternates: { canonical: `/authors/${author.slug}` },
    openGraph: {
      title,
      description,
      url: `/authors/${author.slug}`,
      type: "profile",
      images: author.image ? [{ url: author.image }] : undefined,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) notFound()

  const [authors, posts] = await Promise.all([getAuthors(), getAuthorPosts(slug)])

  return <AuthorProfilePage author={author} authors={authors} posts={posts} />
}
