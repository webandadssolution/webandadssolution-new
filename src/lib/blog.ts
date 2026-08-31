const CMS_URL = (process.env.CMS_URL || "http://localhost:8000").replace(/\/$/, "")

export interface BlogCategory {
  name: string
  slug: string
  postCount: number
}

export interface BlogPost {
  id: number
  slug: string
  category: string
  categorySlug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorSlug: string | null
  authorImage: string | null
  date: string
  dateIso: string
  readTime: string
  tags: string[]
  image: string | null
  metaTitle: string
  metaDescription: string
  canonicalUrl: string
  schema: Record<string, unknown>
}

export interface AuthorProfile {
  id: number
  slug: string
  name: string
  role: string
  description: string
  expertise: string[]
  image: string | null
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export interface CmsCategory {
  name: string
  slug: string
  post_count: number
}

export interface CmsPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content?: string
  featured_image: string | null
  category: { name: string; slug: string } | null
  meta: { title: string; description: string; canonical_url: string }
  author: string | null
  author_slug: string | null
  author_image: string | null
  published_at: string
  updated_at: string
  schema: Record<string, unknown>
}

export interface CmsPostsResponse {
  data: CmsPost[]
  pagination: { page: number; limit: number; total: number; total_pages: number }
}

export interface CmsAuthor {
  id: number
  slug: string
  name: string
  role: string
  description: string
  expertise: string[]
  image: string | null
  meta_title: string
  meta_description: string
  meta_keywords: string
}

export function normalizeAuthor(author: CmsAuthor): AuthorProfile {
  return {
    id: author.id,
    slug: author.slug,
    name: author.name,
    role: author.role,
    description: author.description,
    expertise: author.expertise,
    image: author.image,
    metaTitle: author.meta_title || "",
    metaDescription: author.meta_description || "",
    metaKeywords: author.meta_keywords || "",
  }
}

export interface CmsAuthorsResponse {
  data: CmsAuthor[]
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export function estimateReadTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

export function normalizePost(post: CmsPost): BlogPost {
  const category = post.category?.name ?? "Uncategorized"
  return {
    id: post.id,
    slug: post.slug,
    category,
    categorySlug: post.category?.slug ?? "",
    title: post.title,
    excerpt: post.excerpt,
    content: post.content ?? "",
    author: post.author ?? "Web and Ads Solutions",
    authorSlug: post.author_slug ?? null,
    authorImage: post.author_image ?? null,
    date: formatDate(post.published_at),
    dateIso: post.published_at,
    readTime: estimateReadTime(post.content ?? post.excerpt),
    tags: [category],
    image: post.featured_image,
    metaTitle: post.meta.title,
    metaDescription: post.meta.description,
    canonicalUrl: post.meta.canonical_url,
    schema: post.schema,
  }
}

export async function getCategories(): Promise<BlogCategory[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/categories.php`)
    if (!res.ok) {
      console.error(`[blog] getCategories: HTTP ${res.status} from ${CMS_URL}/api/categories.php`)
      return []
    }
    const { data }: { data: CmsCategory[] } = await res.json()
    return data.map((c) => ({ name: c.name, slug: c.slug, postCount: c.post_count }))
  } catch (err) {
    console.error("[blog] getCategories failed:", err)
    return []
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts: CmsPost[] = []
    let page = 1
    let totalPages = 1
    do {
      const res = await fetch(`${CMS_URL}/api/posts.php?page=${page}&limit=100`)
      if (!res.ok) {
        console.error(`[blog] getBlogPosts: HTTP ${res.status} from ${CMS_URL}/api/posts.php?page=${page}`)
        break
      }
      const json: CmsPostsResponse = await res.json()
      posts.push(...json.data)
      totalPages = json.pagination.total_pages
      page++
    } while (page <= totalPages)
    return posts.filter((p) => p.category).map(normalizePost)
  } catch (err) {
    console.error("[blog] getBlogPosts failed:", err)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/post.php?slug=${encodeURIComponent(slug)}`)
    if (!res.ok) return null
    const { data }: { data: CmsPost } = await res.json()
    return data ? normalizePost(data) : null
  } catch {
    return null
  }
}

export async function getAuthors(): Promise<AuthorProfile[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/authors.php`)
    if (!res.ok) return []
    const { data }: CmsAuthorsResponse = await res.json()
    return (data || []).map(normalizeAuthor)
  } catch {
    return []
  }
}

export async function getAuthorBySlug(slug: string): Promise<AuthorProfile | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/author.php?slug=${encodeURIComponent(slug)}`)
    if (!res.ok) return null
    const { data }: { data: CmsAuthor | null } = await res.json()
    return data ? normalizeAuthor(data) : null
  } catch {
    return null
  }
}

export async function getAuthorPosts(slug: string, limit = 24): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/author-posts.php?slug=${encodeURIComponent(slug)}&limit=${limit}`)
    if (!res.ok) return []
    const { data }: { data: CmsPost[] } = await res.json()
    return (data || []).map(normalizePost)
  } catch {
    return []
  }
}
