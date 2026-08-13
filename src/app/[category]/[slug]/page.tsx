import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogPostPage from "../../../views/blog-post-page"
import { getBlogPostBySlug, getBlogPosts, getCategories } from "../../../lib/blog"
import { JsonLd, buildBlogArticleJsonLd, buildBlogMetadata } from "../../../lib/seo"

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ category: post.categorySlug, slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post || post.categorySlug !== category) return {}

  return buildBlogMetadata(post)
}

export default async function Page({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post || post.categorySlug !== category) notFound()

  const [posts, categories] = await Promise.all([getBlogPosts(), getCategories()])
  const related = posts.filter((p) => p.id !== post.id && p.categorySlug === post.categorySlug).slice(0, 3)
  const recentPosts = posts.filter((p) => p.id !== post.id).slice(0, 5)

  return (
    <>
      <JsonLd data={buildBlogArticleJsonLd(post)} />
      <BlogPostPage post={post} related={related} recentPosts={recentPosts} categories={categories} />
    </>
  )
}
