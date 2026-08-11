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

  return {
    title: `${author.name} | Web and Ads Solutions`,
    description: author.description || `Read articles written by ${author.name}.`,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) notFound()

  const [authors, posts] = await Promise.all([getAuthors(), getAuthorPosts(slug, 6)])

  return <AuthorProfilePage author={author} authors={authors} posts={posts} />
}
