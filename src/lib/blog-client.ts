"use client"

import {
  normalizePost,
  normalizeAuthor,
  type BlogCategory,
  type BlogPost,
  type AuthorProfile,
  type CmsCategory,
  type CmsPost,
  type CmsPostsResponse,
  type CmsAuthor,
  type CmsAuthorsResponse,
} from "./blog"

const CMS_URL = (process.env.NEXT_PUBLIC_CMS_URL || "").replace(/\/$/, "")

export async function fetchCategoriesLive(): Promise<BlogCategory[]> {
  if (!CMS_URL) return []
  try {
    const res = await fetch(`${CMS_URL}/api/categories.php`)
    if (!res.ok) return []
    const { data }: { data: CmsCategory[] } = await res.json()
    return data.map((c) => ({ name: c.name, slug: c.slug, postCount: c.post_count }))
  } catch {
    return []
  }
}

export async function fetchBlogPostsLive(): Promise<BlogPost[]> {
  if (!CMS_URL) return []
  try {
    const posts: CmsPost[] = []
    let page = 1
    let totalPages = 1
    do {
      const res = await fetch(`${CMS_URL}/api/posts.php?page=${page}&limit=100`)
      if (!res.ok) break
      const json: CmsPostsResponse = await res.json()
      posts.push(...json.data)
      totalPages = json.pagination.total_pages
      page++
    } while (page <= totalPages)
    return posts.filter((p) => p.category).map(normalizePost)
  } catch {
    return []
  }
}

export async function fetchBlogPostBySlugLive(slug: string): Promise<BlogPost | null> {
  if (!CMS_URL) return null
  try {
    const res = await fetch(`${CMS_URL}/api/post.php?slug=${encodeURIComponent(slug)}`)
    if (!res.ok) return null
    const { data }: { data: CmsPost } = await res.json()
    return data ? normalizePost(data) : null
  } catch {
    return null
  }
}

export async function fetchAuthorBySlugLive(slug: string): Promise<AuthorProfile | null> {
  if (!CMS_URL) return null
  try {
    const res = await fetch(`${CMS_URL}/api/author.php?slug=${encodeURIComponent(slug)}`)
    if (!res.ok) return null
    const { data }: { data: CmsAuthor | null } = await res.json()
    return data ? normalizeAuthor(data) : null
  } catch {
    return null
  }
}

export async function fetchAuthorPostsLive(slug: string, limit = 24): Promise<BlogPost[]> {
  if (!CMS_URL) return []
  try {
    const res = await fetch(`${CMS_URL}/api/author-posts.php?slug=${encodeURIComponent(slug)}&limit=${limit}`)
    if (!res.ok) return []
    const { data }: { data: CmsPost[] } = await res.json()
    return (data || []).map(normalizePost)
  } catch {
    return []
  }
}

export async function fetchAuthorsLive(): Promise<AuthorProfile[]> {
  if (!CMS_URL) return []
  try {
    const res = await fetch(`${CMS_URL}/api/authors.php`)
    if (!res.ok) return []
    const { data }: CmsAuthorsResponse = await res.json()
    return (data || []).map(normalizeAuthor)
  } catch {
    return []
  }
}
